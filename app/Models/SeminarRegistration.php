<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SeminarRegistration extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'email',
        'phone',
        'institution',
        'midtrans_order_id',
        'midtrans_token',
        'payment_status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}