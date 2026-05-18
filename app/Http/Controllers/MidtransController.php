<?php

namespace App\Http\Controllers;

use App\Models\SeminarRegistration;
use Illuminate\Http\Request;

class MidtransController extends Controller
{
    public function handle(Request $request)
    {
        $serverKey = config('services.midtrans.server_key');
        $hashed = hash('sha512',
            $request->order_id .
            $request->status_code .
            $request->gross_amount .
            $serverKey
        );

        if ($hashed !== $request->signature_key) {
            return response()->json(['message' => 'Invalid signature'], 403);
        }

        $registration = SeminarRegistration::where('midtrans_order_id', $request->order_id)->first();

        if (!$registration) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        $status = match($request->transaction_status) {
            'capture', 'settlement' => 'paid',
            'deny', 'cancel'        => 'failed',
            'expire'                => 'expired',
            default                 => 'pending',
        };

        $registration->update(['payment_status' => $status]);

        return response()->json(['message' => 'OK']);
    }
}