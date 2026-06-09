<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Seminar extends Model
{
    protected $fillable = [
        'title',
        'description',
        'speaker',
        'speaker_title',
        'speaker_description',
        'speaker_photo',
        'date',
        'location',
        'price',
        'quota',
        'is_active',
    ];

    protected $appends = [
        'speaker_photo_url',
    ];

    protected $casts = [
        'date'      => 'date',
        'is_active' => 'boolean',
    ];

    public function getSpeakerPhotoUrlAttribute(): ?string
    {
        return $this->speaker_photo ? asset('storage/' . $this->speaker_photo) : null;
    }

    public function speakers()
    {
        return $this->hasMany(Speaker::class)->orderBy('order');
    }

    /**
     * Boot method untuk handle auto-delete file dan optimization
     */
    protected static function boot()
    {
        parent::boot();

        // Auto-delete file lama saat update speaker_photo
        static::updating(function ($seminar) {
            $original = $seminar->getOriginal('speaker_photo');
            if ($original && $original !== $seminar->speaker_photo) {
                Storage::disk('public')->delete($original);
            }
        });

        // Auto-delete file saat record dihapus
        static::deleting(function ($seminar) {
            if ($seminar->speaker_photo) {
                Storage::disk('public')->delete($seminar->speaker_photo);
            }
        });
    }

    /**
     * Helper untuk get storage directory path dengan tahun
     */
    public static function getSpeakerPhotoDirectory(): string
    {
        return 'seminar-speaker-photos/' . now()->year;
    }
}