<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Speaker extends Model
{
    protected $fillable = [
        'seminar_id',
        'name',
        'title',
        'bio',
        'photo',
        'expertise',
        'order',
    ];

    public function seminar()
    {
        return $this->belongsTo(Seminar::class);
    }

    // Helper: get full photo URL or null
    public function getPhotoUrlAttribute(): ?string
    {
        return $this->photo ? asset('storage/' . $this->photo) : null;
    }
}
