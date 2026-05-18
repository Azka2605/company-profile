<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CompetitionRegistrationResource\Pages;
use App\Models\CompetitionRegistration;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class CompetitionRegistrationResource extends Resource
{
    protected static ?string $model = CompetitionRegistration::class;
    protected static ?string $navigationIcon = 'heroicon-o-trophy';
    protected static ?string $navigationLabel = 'Pendaftaran Kompetisi';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')->required()->label('Nama'),
                Forms\Components\TextInput::make('email')->email()->required()->label('Email'),
                Forms\Components\TextInput::make('phone')->required()->label('No. HP'),
                Forms\Components\TextInput::make('institution')->required()->label('Institusi'),
                Forms\Components\TextInput::make('competition_type')->required()->label('Jenis Lomba'),
                Forms\Components\TextInput::make('registration_type')->required()->label('Tipe'),
                Forms\Components\TextInput::make('team_name')->label('Nama Tim'),
                Forms\Components\Select::make('status')
                    ->options([
                        'pending'   => 'Pending',
                        'confirmed' => 'Confirmed',
                        'rejected'  => 'Rejected',
                    ])
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->searchable()->label('Nama'),
                Tables\Columns\TextColumn::make('email')->searchable()->label('Email'),
                Tables\Columns\TextColumn::make('phone')->label('No. HP'),
                Tables\Columns\TextColumn::make('institution')->searchable()->label('Institusi'),
                Tables\Columns\TextColumn::make('competition_type')->searchable()->label('Lomba'),
                Tables\Columns\TextColumn::make('registration_type')->label('Tipe'),
                Tables\Columns\TextColumn::make('team_name')->label('Nama Tim'),
                Tables\Columns\TextColumn::make('members')
                    ->label('Anggota')
                    ->formatStateUsing(fn ($state) => is_array($state)
                        ? collect($state)->pluck('name')->filter()->join(', ')
                        : '-')
                    ->wrap(),
                Tables\Columns\BadgeColumn::make('status')
                    ->colors([
                        'warning' => 'pending',
                        'success' => 'confirmed',
                        'danger'  => 'rejected',
                    ])
                    ->label('Status'),
                Tables\Columns\TextColumn::make('created_at')->dateTime()->sortable()->label('Daftar'),
            ])
            ->filters([])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => Pages\ListCompetitionRegistrations::route('/'),
            'create' => Pages\CreateCompetitionRegistration::route('/create'),
            'edit'   => Pages\EditCompetitionRegistration::route('/{record}/edit'),
        ];
    }
}