import React from 'react';
import { Link } from '@inertiajs/react';
import Layout from '../../Components/Layout';

export default function RoketAir() {
    return (
        <Layout>
            {/* Hero */}
            <section className="bg-white py-20 px-6 text-center border-b border-gray-100">
                <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Kompetisi</span>
                <div className="text-6xl my-4">🚀</div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Roket Air</h1>
                <p className="text-gray-500 max-w-xl mx-auto text-lg">
                    Kompetisi merancang dan meluncurkan roket air dengan ketinggian dan akurasi terbaik.
                </p>
            </section>

            {/* Info */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: '📅', label: 'Tanggal', value: 'TBD' },
                        { icon: '👥', label: 'Tipe', value: 'Tim (2-3 orang)' },
                        { icon: '🏆', label: 'Total Hadiah', value: 'Rp TBD' },
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
                            <div className="text-4xl mb-3">{item.icon}</div>
                            <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                            <p className="text-xl font-bold text-gray-900">{item.value}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Hadiah & Syarat */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Hadiah */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">🏆 Hadiah</h2>
                        <div className="space-y-3">
                            {[
                                { medal: '🥇', juara: 'Juara 1', hadiah: 'Rp TBD' },
                                { medal: '🥈', juara: 'Juara 2', hadiah: 'Rp TBD' },
                                { medal: '🥉', juara: 'Juara 3', hadiah: 'Rp TBD' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between bg-yellow-50 border border-yellow-100 rounded-xl px-5 py-3">
                                    <span className="font-semibold text-gray-900">{item.medal} {item.juara}</span>
                                    <span className="font-bold text-yellow-600">{item.hadiah}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Persyaratan */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Persyaratan</h2>
                        <ul className="space-y-3">
                            {[
                                'Mahasiswa aktif',
                                'Tim 2-3 orang',
                                'Membawa alat sendiri',
                                'Mengisi formulir pendaftaran',
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-600">
                                    <span className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">📅 Timeline</h2>
                    <div className="space-y-6">
                        {[
                            { label: 'Pendaftaran Dibuka', date: 'TBD' },
                            { label: 'Technical Meeting', date: 'TBD' },
                            { label: 'Pelaksanaan', date: 'TBD' },
                            { label: 'Pengumuman', date: 'TBD' },
                        ].map((t, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-gray-900">
                                        {i + 1}
                                    </div>
                                    {i < 3 && <div className="w-0.5 h-12 bg-yellow-200 mt-1"></div>}
                                </div>
                                <div className="pb-6">
                                    <p className="font-bold text-gray-900">{t.label}</p>
                                    <p className="text-yellow-500 text-sm font-semibold">{t.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-yellow-50 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Siap Ikut Lomba?</h2>
                <p className="text-gray-500 mb-8">Daftarkan tim kamu sekarang!</p>
                <Link href={route('competition.register', { type: 'roket_air' })}
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-10 py-4 rounded-full transition duration-300 inline-block text-lg">
                    Daftar Sekarang →
                </Link>
            </section>
        </Layout>
    );
}