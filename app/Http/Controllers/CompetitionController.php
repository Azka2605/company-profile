<?php

namespace App\Http\Controllers;

use App\Models\CompetitionRegistration;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompetitionController extends Controller
{
    public function create($type)
    {
        $validTypes = ['roket_air', 'iot', 'uiux', 'desain_poster'];

        if (!in_array($type, $validTypes)) {
            abort(404);
        }

        $user = auth()->user();

        $existing = CompetitionRegistration::where('user_id', $user->id)
            ->where('competition_type', $type)
            ->first();

        return Inertia::render('CompetitionRegister', [
            'type'     => $type,
            'existing' => $existing,
            'user'     => $user,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'competition_type'  => 'required|in:roket_air,iot,uiux,desain_poster',
            'registration_type' => 'required|in:individu,tim',
            'name'              => 'required|string|max:255',
            'email'             => 'required|email',
            'phone'             => 'required|string|max:20',
            'institution'       => 'required|string|max:255',
            'team_name'         => 'nullable|string|max:255',
            'members'           => 'nullable|array',
        ]);

        $user = auth()->user();

        $existing = CompetitionRegistration::where('user_id', $user->id)
            ->where('competition_type', $request->competition_type)
            ->first();

        if ($existing) {
            return back()->withErrors(['message' => 'Kamu sudah mendaftar lomba ini.']);
        }

        CompetitionRegistration::create([
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
        ]);

        return redirect()->route('dashboard')->with('success', 'Pendaftaran lomba berhasil! Panitia akan menghubungi kamu segera.');
    }
}