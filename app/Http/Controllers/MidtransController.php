<?php

namespace App\Http\Controllers;

use App\Models\SeminarRegistration;
use App\Models\CompetitionRegistration;
use Illuminate\Http\Request;
use App\Services\MidtransService;

class MidtransController extends Controller
{
    public function handle(Request $request, MidtransService $midtransService)
    {
        if (!$midtransService->verifySignature($request->order_id, $request->status_code, $request->gross_amount, $request->signature_key)) {
            return response()->json(['message' => 'Invalid signature'], 403);
        }

        $registration = null;
        if (str_starts_with($request->order_id, 'SEMINAR-')) {
            $registration = SeminarRegistration::where('midtrans_order_id', $request->order_id)->first();
        } elseif (str_starts_with($request->order_id, 'COMPETITION-')) {
            $registration = CompetitionRegistration::where('midtrans_order_id', $request->order_id)->first();
        }

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