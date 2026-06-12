<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TimelineResource\Pages;
use App\Filament\Resources\TimelineResource\RelationManagers;
use App\Models\Timeline;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TimelineResource extends Resource
{
    protected static ?string $model = Timeline::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->required(),
                Forms\Components\TextInput::make('date')
                    ->required(),
                Forms\Components\Select::make('timeline_type')
                    ->label('Tipe Timeline')
                    ->required()
                    ->options([
                        'event' => 'Timeline Event / Dashboard',
                        'seminar' => 'Timeline Seminar',
                    ])
                    ->default('event'),
                Forms\Components\Textarea::make('description')
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('order')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\Toggle::make('is_active')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('timeline_type')
                    ->label('Tipe')
                    ->formatStateUsing(fn (?string $state): string => [
                        'event' => 'Event / Dashboard',
                        'seminar' => 'Seminar',
                    ][$state] ?? $state)
                    ->sortable(),
                Tables\Columns\TextColumn::make('date')
                    ->searchable(),
                Tables\Columns\TextColumn::make('order')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
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
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTimelines::route('/'),
            'create' => Pages\CreateTimeline::route('/create'),
            'edit' => Pages\EditTimeline::route('/{record}/edit'),
        ];
    }
}
