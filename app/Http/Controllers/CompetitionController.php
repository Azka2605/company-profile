<?php

namespace App\Http\Controllers;

use App\Models\Competition;
use App\Models\CompetitionRegistration;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Services\MidtransService;

class CompetitionController extends Controller
{
    public function register($slug)  // ← rename dari create(), pakai $slug
    {
        // Ambil dari DB, bukan hard-coded
        $competition = Competition::where('slug', $slug)
            ->where('is_active', true)
            ->firstOrFail();  // otomatis 404 kalau tidak ada

        $user = auth()->user();

        $existing = CompetitionRegistration::where('user_id', $user->id)
            ->where('competition_type', $slug)
            ->first();

        return Inertia::render('CompetitionRegister', [
            'competition' => $competition,  // ← kirim object lengkap
            'existing'    => $existing,
            'user'        => $user,
        ]);
    }

    public function store(Request $request, MidtransService $midtransService)
{
    $request->validate([
        'competition_type'  => 'required|exists:competitions,slug',
        'registration_type' => 'required|in:individu,tim',
        'name'              => 'required|string|max:255',
        'email'             => 'required|email',
        'phone'             => 'required|string|max:20',
        'institution'       => 'required|string|max:255',
        'team_name'         => 'nullable|string|max:255',
        'members'           => 'nullable|array',
    ]);

    $user = auth()->user();

    // ← tambah ini: ambil data competition dari DB
    $competition = Competition::where('slug', $request->competition_type)->firstOrFail();

    $existing = CompetitionRegistration::where('user_id', $user->id)
        ->where('competition_type', $request->competition_type)
        ->first();

    if ($existing) {
        return back()->withErrors(['message' => 'Kamu sudah mendaftar lomba ini.']);
    }

    $orderId = 'COMPETITION-' . $user->id . '-' . time();

    $registration = CompetitionRegistration::create([
        'user_id'           => $user->id,
        'competition_type'  => $request->competition_type,
        'registration_type' => $request->registration_type,
        'name'              => $request->name,
        'email'             => $request->email,
        'phone'             => $request->phone,
        'institution'       => $request->institution,
        'team_name'         => $request->team_name,
        'members'           => $request->members,
        'status'            => 'pending',
        'midtrans_order_id' => $orderId,
    ]);

    try {
        $snapToken = $midtransService->getSnapToken(
            ['order_id' => $orderId, 'gross_amount' => $competition->price],
            ['first_name' => $request->name, 'email' => $request->email, 'phone' => $request->phone]
        );
        $registration->update(['midtrans_token' => $snapToken]);
    } catch (\Exception $e) {
        dd($e->getMessage());
    }

    return redirect()->route('dashboard')
        ->with('success', 'Pendaftaran berhasil! Selesaikan pembayaran di dashboard.');
}
}