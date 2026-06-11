<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SeminarResource\Pages;
use App\Models\Seminar;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Grid;

class SeminarResource extends Resource
{
    protected static ?string $model = Seminar::class;

    protected static ?string $navigationIcon = 'heroicon-o-academic-cap';
    protected static ?string $navigationLabel = 'Seminar Nasional';
    protected static ?string $modelLabel = 'Seminar';
    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([

                Section::make('🎤 Informasi Utama Seminar')
                    ->description('Konten utama yang akan ditampilkan kepada publik di halaman Seminar.')
                    ->icon('heroicon-o-megaphone')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->label('Judul Seminar')
                            ->placeholder('Contoh: Seminar Nasional EEA 2026')
                            ->required()
                            ->columnSpanFull(),

                        Forms\Components\Textarea::make('description')
                            ->label('Deskripsi / Tagline')
                            ->placeholder('Tuliskan deskripsi singkat yang menarik tentang seminar ini...')
                            ->rows(4)
                            ->columnSpanFull(),
                    ]),

                Section::make('🎙️ Narasumber / Pembicara')
                    ->description('Informasi pembicara utama yang akan hadir.')
                    ->icon('heroicon-o-user-circle')
                    ->columns(2)
                    ->schema([
                        Forms\Components\TextInput::make('speaker')
                            ->label('Nama Pembicara')
                            ->placeholder('Contoh: Prof. Dr. Budi Santoso, M.T.'),

                        Forms\Components\TextInput::make('speaker_title')
                            ->label('Jabatan / Gelar')
                            ->placeholder('Contoh: Dosen Senior, Pakar Sistem Embedded'),

                        Forms\Components\Textarea::make('speaker_description')
                            ->label('Deskripsi Pembicara')
                            ->placeholder('Tuliskan ringkasan singkat tentang pembicara...')
                            ->rows(4)
                            ->columnSpanFull(),
                    ]),

                Section::make('📅 Waktu & Tempat')
                    ->description('Detail pelaksanaan seminar.')
                    ->icon('heroicon-o-map-pin')
                    ->columns(2)
                    ->schema([
                        Forms\Components\DatePicker::make('date')
                            ->label('Tanggal Pelaksanaan')
                            ->native(false)
                            ->displayFormat('d F Y'),

                        Forms\Components\TextInput::make('location')
                            ->label('Lokasi / Tempat')
                            ->placeholder('Contoh: Gedung Auditorium FMIPA UNILA'),
                    ]),

                Section::make('💰 Harga & Kuota')
                    ->description('Pengaturan tiket seminar.')
                    ->icon('heroicon-o-ticket')
                    ->columns(2)
                    ->schema([
                        Forms\Components\TextInput::make('price')
                            ->label('Harga Tiket (Rp)')
                            ->numeric()
                            ->default(0)
                            ->prefix('Rp')
                            ->placeholder('0 jika gratis'),

                        Forms\Components\TextInput::make('quota')
                            ->label('Kuota Peserta')
                            ->numeric()
                            ->placeholder('Kosongkan jika tidak ada batas'),
                    ]),

                Section::make('⚙️ Status')
                    ->description('Aktifkan seminar agar muncul di halaman publik.')
                    ->icon('heroicon-o-cog-6-tooth')
                    ->schema([
                        Forms\Components\Toggle::make('is_active')
                            ->label('Tampilkan di Halaman Publik')
                            ->helperText('Jika dinonaktifkan, halaman seminar tidak akan menampilkan data ini.')
                            ->required()
                            ->default(true),
                    ]),

            ]);
    }

    // Table is kept minimal since we go straight to Edit
    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label('Judul Seminar')
                    ->weight('bold')
                    ->searchable(),
                Tables\Columns\TextColumn::make('speaker')
                    ->label('Pembicara')
                    ->searchable(),
                Tables\Columns\TextColumn::make('date')
                    ->label('Tanggal')
                    ->date('d M Y')
                    ->sortable(),
                Tables\Columns\TextColumn::make('quota')
                    ->label('Kuota')
                    ->numeric()
                    ->alignCenter(),
                Tables\Columns\TextColumn::make('price')
                    ->label('Harga')
                    ->money('IDR')
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_active')
                    ->label('Aktif')
                    ->boolean()
                    ->alignCenter(),
            ])
            ->filters([])
            ->actions([
                Tables\Actions\EditAction::make()->label('Ubah'),
            ])
            ->bulkActions([]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => Pages\ListSeminars::route('/'),
            'edit'   => Pages\EditSeminar::route('/{record}/edit'),
            // 'create' is intentionally removed
        ];
    }
}
