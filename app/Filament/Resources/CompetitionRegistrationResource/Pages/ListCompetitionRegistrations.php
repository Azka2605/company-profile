<?php

namespace App\Filament\Resources\CompetitionRegistrationResource\Pages;

use App\Filament\Resources\CompetitionRegistrationResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListCompetitionRegistrations extends ListRecords
{
    protected static string $resource = CompetitionRegistrationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
