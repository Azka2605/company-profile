<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('timelines', function (Blueprint $table) {
            $table->string('timeline_type')->default('event')->after('date');
        });

        DB::table('timelines')->update(['timeline_type' => 'event']);
    }

    public function down(): void
    {
        Schema::table('timelines', function (Blueprint $table) {
            $table->dropColumn('timeline_type');
        });
    }
};
