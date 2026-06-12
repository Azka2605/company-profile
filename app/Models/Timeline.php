<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Timeline extends Model
{
    protected $fillable = [
        'title',
        'date',
        'description',
        'order',
        'is_active',
        'timeline_type',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}