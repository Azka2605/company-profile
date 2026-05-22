<?php

namespace App\Http\Controllers;

use App\Models\SeminarRegistration;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SeminarController extends Controller
{
    public function create()
    {
        $user = auth()->user();

        // Cek apakah sudah pernah daftar
        $existing = SeminarRegistration::where('user_id', $user->id)->first();

        return Inertia::render('SeminarRegister', [
            'existing' => $existing,
            'user' => $user,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'        => 'required|string|max:255',
            'email'       => 'required|email',
            'phone'       => 'required|string|max:20',
            'institution' => 'required|string|max:255',
        ]);

        $user = auth()->user();

        // Cegah daftar dobel
        $existing = SeminarRegistration::where('user_id', $user->id)->first();
        if ($existing) {
            return back()->withErrors(['message' => 'Kamu sudah mendaftar seminar.']);
        }

        $orderId = 'SEMINAR-' . $user->id . '-' . time();

        $registration = SeminarRegistration::create([
            'user_id'          => $user->id,
            'name'             => $request->name,
            'email'            => $request->email,
            'phone'            => $request->phone,
            'institution'      => $request->institution,
            'midtrans_order_id'=> $orderId,
            'payment_status'   => 'pending',
        ]);

        // TODO: Generate Midtrans Snap token di sini (Step 4)
    // Setup Midtrans
        \Midtrans\Config::$serverKey = config('services.midtrans.server_key');
        \Midtrans\Config::$isProduction = config('services.midtrans.is_production');
        \Midtrans\Config::$isSanitized = true;
        \Midtrans\Config::$is3ds = true;

        $params = [
            'transaction_details' => [
                'order_id'     => $orderId,
                'gross_amount' => 50000, // ganti dengan harga tiket asli nanti
            ],
            'customer_details' => [
                'first_name' => $request->name,
                'email'      => $request->email,
                'phone'      => $request->phone,
            ],
        ];

       try {
    $snapToken = \Midtrans\Snap::getSnapToken($params);
    $registration->update(['midtrans_token' => $snapToken]);
} catch (\Exception $e) {
    dd($e->getMessage());
}

        return Inertia::render('SeminarRegister', [
            'snap_token'   => $snapToken,
            'client_key'   => config('services.midtrans.client_key'),
            'snap_url'     => config('services.midtrans.snap_url'),
            'registration' => $registration,
        ]);

    }
}