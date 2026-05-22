<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Competition extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'icon',
        'description',
        'requirements',
        'timeline',
        'prizes',
        'max_participants',
        'is_active',
        'registration_type',
        'price',
    ];

    protected $casts = [
        'requirements' => 'array',
        'timeline'     => 'array',
        'prizes'       => 'array',
        'is_active'    => 'boolean',
    ];

    public function registrations()
    {
        return $this->hasMany(CompetitionRegistration::class, 'competition_type', 'slug');
    }
}