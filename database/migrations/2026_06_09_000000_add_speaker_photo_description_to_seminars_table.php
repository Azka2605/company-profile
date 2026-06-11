<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('seminars', function (Blueprint $table) {
            $table->text('speaker_description')->nullable()->after('speaker_title');
            $table->string('speaker_photo')->nullable()->after('speaker_description');
        });
    }

    public function down(): void
    {
        Schema::table('seminars', function (Blueprint $table) {
            $table->dropColumn(['speaker_description', 'speaker_photo']);
        });
    }
};
