<?php

namespace App\Filament\Resources\SeminarRegistrationResource\Pages;

use App\Filament\Resources\SeminarRegistrationResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListSeminarRegistrations extends ListRecords
{
    protected static string $resource = SeminarRegistrationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
