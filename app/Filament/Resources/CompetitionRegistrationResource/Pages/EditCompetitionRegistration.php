<?php

namespace App\Filament\Resources\CompetitionRegistrationResource\Pages;

use App\Filament\Resources\CompetitionRegistrationResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditCompetitionRegistration extends EditRecord
{
    protected static string $resource = CompetitionRegistrationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
