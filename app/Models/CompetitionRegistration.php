<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompetitionRegistration extends Model
{
    protected $fillable = [
        'user_id',
        'competition_type',
        'registration_type',
        'name',
        'email',
        'phone',
        'institution',
        'team_name',
        'members',
        'status',
    ];

    protected $casts = [
        'members' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}