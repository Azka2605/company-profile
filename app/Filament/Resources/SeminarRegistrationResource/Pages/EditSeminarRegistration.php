<?php

namespace App\Filament\Resources\SeminarRegistrationResource\Pages;

use App\Filament\Resources\SeminarRegistrationResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSeminarRegistration extends EditRecord
{
    protected static string $resource = SeminarRegistrationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
