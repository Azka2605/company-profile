<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SeminarRegistrationResource\Pages;
use App\Models\SeminarRegistration;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class SeminarRegistrationResource extends Resource
{
    protected static ?string $model = SeminarRegistration::class;
    protected static ?string $navigationIcon = 'heroicon-o-microphone';
    protected static ?string $navigationLabel = 'Pendaftaran Seminar';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')->required()->label('Nama'),
                Forms\Components\TextInput::make('email')->email()->required()->label('Email'),
                Forms\Components\TextInput::make('phone')->required()->label('No. HP'),
                Forms\Components\TextInput::make('institution')->required()->label('Institusi'),
                Forms\Components\Select::make('payment_status')
                    ->options([
                        'pending' => 'Pending',
                        'paid'    => 'Lunas',
                        'failed'  => 'Gagal',
                        'expired' => 'Expired',
                    ])
                    ->required()
                    ->label('Status Pembayaran'),
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
                Tables\Columns\TextColumn::make('midtrans_order_id')->label('Order ID'),
                Tables\Columns\BadgeColumn::make('payment_status')
                    ->colors([
                        'warning' => 'pending',
                        'success' => 'paid',
                        'danger'  => 'failed',
                        'gray'    => 'expired',
                    ])
                    ->label('Status Pembayaran'),
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
            'index'  => Pages\ListSeminarRegistrations::route('/'),
            'create' => Pages\CreateSeminarRegistration::route('/create'),
            'edit'   => Pages\EditSeminarRegistration::route('/{record}/edit'),
        ];
    }
}