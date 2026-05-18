<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SeminarController;
use App\Http\Controllers\CompetitionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MidtransController;
use App\Http\Controllers\Auth\GoogleController;

// ─── Public Routes ───────────────────────────────────────
Route::get('/', fn() => Inertia::render('Home'))->name('home');
Route::get('/about', fn() => Inertia::render('About'))->name('about');
Route::get('/seminar', fn() => Inertia::render('Seminar'))->name('seminar');
Route::get('/competition', fn() => Inertia::render('Competition'))->name('competition');
Route::get('/contact', fn() => Inertia::render('Contact'))->name('contact');

// ─── Competition Detail Pages ─────────────────────────────
Route::get('/competition/roket-air', fn() => Inertia::render('Competitions/RoketAir'))->name('competition.roket-air');
Route::get('/competition/iot', fn() => Inertia::render('Competitions/IoT'))->name('competition.iot');
Route::get('/competition/uiux', fn() => Inertia::render('Competitions/UIUX'))->name('competition.uiux');
Route::get('/competition/desain-poster', fn() => Inertia::render('Competitions/DesainPoster'))->name('competition.desain-poster');

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
    Route::get('/competition/{type}/register', [CompetitionController::class, 'create'])->name('competition.register');
    Route::post('/competition/register', [CompetitionController::class, 'store'])->name('competition.store');
});

Route::post('/midtrans/webhook', [MidtransController::class, 'handle'])
    ->name('midtrans.webhook');

// ─── Google OAuth ─────────────────────────────────────────
Route::get('/auth/google', [GoogleController::class, 'redirect'])->name('google.redirect');
Route::get('/auth/google/callback', [GoogleController::class, 'callback'])->name('google.callback');

require __DIR__.'/auth.php';