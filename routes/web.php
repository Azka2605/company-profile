<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SeminarController;
use App\Http\Controllers\CompetitionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MidtransController;
use App\Http\Controllers\Auth\GoogleController;

// ─── Public Routes ───────────────────────────────────────
Route::get('/', function () {
    $competitions = App\Models\Competition::where('is_active', true)->get();
    $timelines    = App\Models\Timeline::where('is_active', true)
        ->where('timeline_type', 'event')
        ->orderBy('order')
        ->get();
    $seminar      = App\Models\Seminar::where('is_active', true)->first();
    return Inertia::render('Home', [
        'competitions' => $competitions,
        'timelines'    => $timelines,
        'seminar'      => $seminar,
    ]);
})->name('home');

Route::get('/seminar', function () {
    $seminar   = App\Models\Seminar::where('is_active', true)->first();
    $timelines = App\Models\Timeline::where('is_active', true)
        ->where('timeline_type', 'seminar')
        ->orderBy('order')
        ->get();
    return Inertia::render('Seminar', [
        'seminar'   => $seminar,
        'timelines' => $timelines,
    ]);
})->name('seminar');
Route::get('/about', fn() => Inertia::render('About'))->name('about');
Route::get('/competition', function () {
    $competitions = App\Models\Competition::where('is_active', true)->get();
    return Inertia::render('Competition', [
        'competitions' => $competitions,
    ]);
})->name('competition');
Route::get('/contact', fn() => Inertia::render('Contact'))->name('contact');


// ─── Auth Required ───────────────────────────────────────
Route::middleware('auth')->group(function () {
    // Dashboard
Route::get('/dashboard', function () {
    $user = auth()->user();
    return Inertia::render('Dashboard', [
        'seminar'      => $user->seminarRegistration,
        'competitions' => $user->competitionRegistrations,
        'client_key'   => config('services.midtrans.client_key'),
        'snap_url'     => config('services.midtrans.snap_url'),
    ]);
})->name('dashboard');

    // Profile (Breeze default)
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Seminar Registration
    Route::get('/seminar/register', [SeminarController::class, 'create'])->name('seminar.register');
    Route::post('/seminar/register', [SeminarController::class, 'store'])->name('seminar.store');

    // Competition Registration
    Route::get('/competition/{slug}/register', [CompetitionController::class, 'register'])->name('competition.register');
    Route::post('/competition/{slug}/register', [CompetitionController::class, 'store'])->name('competition.store');
});

Route::post('/midtrans/webhook', [MidtransController::class, 'handle'])
    ->name('midtrans.webhook');

// ─── Google OAuth ─────────────────────────────────────────
Route::get('/auth/google', [GoogleController::class, 'redirect'])->name('google.redirect');
Route::get('/auth/google/callback', [GoogleController::class, 'callback'])->name('google.callback');

require __DIR__.'/auth.php';