<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Seminar extends Model
{
    protected $fillable = [
        'title',
        'description',
        'speaker',
        'speaker_title',
        'date',
        'location',
        'price',
        'quota',
        'is_active',
    ];

    protected $casts = [
        'date'      => 'date',
        'is_active' => 'boolean',
    ];

    public function speakers()
    {
        return $this->hasMany(Speaker::class)->orderBy('order');
    }
}