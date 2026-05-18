<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::table('competition_registrations', function (Blueprint $table) {
            $table->string('midtrans_order_id')->nullable()->after('status');
            $table->string('midtrans_token')->nullable()->after('midtrans_order_id');
            $table->string('payment_status')->default('pending')->after('midtrans_token');
        });
    }

    public function down(): void {
        Schema::table('competition_registrations', function (Blueprint $table) {
            $table->dropColumn(['midtrans_order_id', 'midtrans_token', 'payment_status']);
        });
    }
};