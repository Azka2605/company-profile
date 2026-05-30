<?php

namespace App\Filament\Resources\SeminarResource\Pages;

use App\Filament\Resources\SeminarResource;
use App\Models\Seminar;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Support\Facades\Redirect;

class ListSeminars extends ListRecords
{
    protected static string $resource = SeminarResource::class;

    // No "Create" button — we redirect directly to the one seminar
    protected function getHeaderActions(): array
    {
        return [];
    }

    public function mount(): void
    {
        // Auto-create a seminar record if none exists
        $seminar = Seminar::first();

        if (! $seminar) {
            $seminar = Seminar::create([
                'title'         => 'Seminar Nasional EEA 2026',
                'description'   => 'Seminar nasional tahunan Electrical Engineering in Action, menghadirkan pakar dan inovator di bidang teknik elektro se-Indonesia.',
                'speaker'       => '',
                'speaker_title' => '',
                'location'      => 'Universitas Lampung',
                'price'         => 0,
                'quota'         => 300,
                'is_active'     => true,
            ]);
        }

        // Redirect straight to the edit page
        $this->redirect(SeminarResource::getUrl('edit', ['record' => $seminar->id]));
    }
}
