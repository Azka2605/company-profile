<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CompetitionResource\Pages;
use App\Models\Competition;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class CompetitionResource extends Resource
{
    protected static ?string $model = Competition::class;
    protected static ?string $navigationIcon = 'heroicon-o-trophy';
    protected static ?string $navigationLabel = 'Kelola Lomba';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Informasi Lomba')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('Nama Lomba')
                            ->required(),
                        Forms\Components\TextInput::make('slug')
                            ->label('Slug (ID)')
                            ->required()
                            ->helperText('Contoh: roket_air, iot, uiux, desain_poster'),
                        Forms\Components\TextInput::make('icon')
                            ->label('Icon (emoji)')
                            ->default('🏆'),
                        Forms\Components\Textarea::make('description')
                            ->label('Deskripsi')
                            ->required()
                            ->rows(3),
                        Forms\Components\Select::make('registration_type')
                            ->label('Tipe Pendaftaran')
                            ->options([
                                'individu' => 'Individu',
                                'tim'      => 'Tim',
                                'both'     => 'Individu & Tim',
                            ])
                            ->required(),
                        Forms\Components\TextInput::make('max_participants')
                            ->label('Maks. Peserta')
                            ->numeric()
                            ->default(100),
                        Forms\Components\TextInput::make('price')
                            ->label('Harga (Rp)')
                            ->numeric()
                            ->default(50000)
                            ->prefix('Rp')
                            ->required(),
                        Forms\Components\Toggle::make('is_active')
                            ->label('Aktif')
                            ->default(true),
                    ])->columns(2),

                Forms\Components\Section::make('Persyaratan')
                    ->schema([
                        Forms\Components\Repeater::make('requirements')
                            ->label('Persyaratan')
                            ->schema([
                                Forms\Components\TextInput::make('item')
                                    ->label('Persyaratan')
                                    ->required(),
                            ])
                            ->defaultItems(1),
                    ]),

                Forms\Components\Section::make('Timeline')
                    ->schema([
                        Forms\Components\Repeater::make('timeline')
                            ->label('Timeline')
                            ->schema([
                                Forms\Components\TextInput::make('label')
                                    ->label('Tahap')
                                    ->required(),
                                Forms\Components\TextInput::make('date')
                                    ->label('Tanggal')
                                    ->default('TBD'),
                            ])
                            ->columns(2)
                            ->defaultItems(1),
                    ]),

                Forms\Components\Section::make('Hadiah')
                    ->schema([
                        Forms\Components\Repeater::make('prizes')
                            ->label('Hadiah')
                            ->schema([
                                Forms\Components\TextInput::make('juara')
                                    ->label('Juara')
                                    ->required(),
                                Forms\Components\TextInput::make('hadiah')
                                    ->label('Hadiah')
                                    ->required(),
                            ])
                            ->columns(2)
                            ->defaultItems(3),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('icon')->label('Icon'),
                Tables\Columns\TextColumn::make('name')->searchable()->label('Nama Lomba'),
                Tables\Columns\TextColumn::make('slug')->label('Slug'),
                Tables\Columns\TextColumn::make('max_participants')->label('Maks. Peserta'),
                Tables\Columns\TextColumn::make('price')
    ->label('Harga')
    ->money('IDR')
    ->sortable(),
                Tables\Columns\IconColumn::make('is_active')->boolean()->label('Aktif'),
                Tables\Columns\TextColumn::make('registration_type')->label('Tipe'),
                Tables\Columns\TextColumn::make('created_at')->dateTime()->sortable()->label('Dibuat'),
            ])
            ->filters([])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
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
            'index'  => Pages\ListCompetitions::route('/'),
            'create' => Pages\CreateCompetition::route('/create'),
            'edit'   => Pages\EditCompetition::route('/{record}/edit'),
        ];
    }
}