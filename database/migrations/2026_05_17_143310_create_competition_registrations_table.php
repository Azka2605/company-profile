<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('competition_registrations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->enum('competition_type', ['roket_air', 'iot', 'uiux', 'desain_poster']);
            $table->enum('registration_type', ['individu', 'tim']);
            $table->string('name'); // nama peserta / ketua tim
            $table->string('email');
            $table->string('phone');
            $table->string('institution');
            $table->string('team_name')->nullable(); // khusus tim
            $table->json('members')->nullable(); // anggota tim selain ketua
            $table->enum('status', ['pending', 'confirmed', 'rejected'])->default('pending');
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('competition_registrations');
    }
};