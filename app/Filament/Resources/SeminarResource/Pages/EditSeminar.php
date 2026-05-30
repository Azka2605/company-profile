<?php

namespace App\Filament\Resources\SeminarResource\Pages;

use App\Filament\Resources\SeminarResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Filament\Notifications\Notification;

class EditSeminar extends EditRecord
{
    protected static string $resource = SeminarResource::class;

    // Lock: no delete button — seminar record is permanent
    protected function getHeaderActions(): array
    {
        return [
            // Delete intentionally omitted
        ];
    }

    protected function getRedirectUrl(): string
    {
        // After saving, stay on the same edit page
        return $this->getResource()::getUrl('edit', ['record' => $this->record]);
    }

    protected function getSavedNotification(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('Seminar diperbarui!')
            ->body('Perubahan data seminar berhasil disimpan dan sudah aktif di halaman publik.');
    }
}
