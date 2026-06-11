<?php

namespace App\Services;

use Midtrans\Config;
use Midtrans\Snap;

class MidtransService
{
    public function __construct()
    {
        Config::$serverKey = config('services.midtrans.server_key');
        Config::$isProduction = config('services.midtrans.is_production');
        Config::$isSanitized = true;
        Config::$is3ds = true;
    }

    public function getSnapToken(array $transactionDetails, array $customerDetails): string
    {
        $params = [
            'transaction_details' => $transactionDetails,
            'customer_details'    => $customerDetails,
        ];

        return Snap::getSnapToken($params);
    }
    
    public function verifySignature(string $orderId, string $statusCode, string $grossAmount, string $signatureKey): bool
    {
        $hashed = hash('sha512', $orderId . $statusCode . $grossAmount . config('services.midtrans.server_key'));
        return $hashed === $signatureKey;
    }
}
