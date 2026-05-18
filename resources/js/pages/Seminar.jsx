import React from 'react';
import { Link } from '@inertiajs/react';
import Layout from '../Components/Layout';

export default function Seminar() {
    return (
        <Layout>

            {/* Hero */}
            <section className="bg-white py-20 px-6 text-center border-b border-gray-100">
                <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Seminar Nasional</span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                    Seminar Nasional <span className="text-yellow-500">EEA 2026</span>
                </h1>
                <p className="text-gray-500 max-w-xl mx-auto text-lg">
                    Dapatkan wawasan dari para ahli dan praktisi terkemuka di bidang teknik elektro dan teknologi.
                </p>
            </section>

            {/* Info Section */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: '📅', label: 'Tanggal', value: 'TBD' },
                        { icon: '📍', label: 'Lokasi', value: 'Universitas Lampung' },
                        { icon: '🎟️', label: 'Harga Tiket', value: 'Rp TBD' },
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
                            <div className="text-4xl mb-3">{item.icon}</div>
                            <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                            <p className="text-xl font-bold text-gray-900">{item.value}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Timeline</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2">Tahapan Seminar</h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            { label: 'Pendaftaran Dibuka', date: 'TBD', desc: 'Pembelian tiket dibuka untuk umum' },
                            { label: 'Pendaftaran Ditutup', date: 'TBD', desc: 'Batas akhir pembelian tiket' },
                            { label: 'Pelaksanaan Seminar', date: 'TBD', desc: 'Hari pelaksanaan seminar nasional' },
                        ].map((t, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-gray-900">
                                        {i + 1}
                                    </div>
                                    {i < 2 && <div className="w-0.5 h-12 bg-yellow-200 mt-1"></div>}
                                </div>
                                <div className="pb-6">
                                    <p className="font-bold text-gray-900">{t.label}</p>
                                    <p className="text-yellow-500 text-sm font-semibold">{t.date}</p>
                                    <p className="text-gray-400 text-sm mt-1">{t.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Beli Tiket */}
            <section className="py-16 px-6 bg-yellow-50 text-center">
                <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Pendaftaran</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Siap Ikut Seminar?</h2>
                <p className="text-gray-500 mb-8">Daftarkan dirimu sekarang dan dapatkan pengalaman terbaik di EEA 2026.</p>
                <Link href={route('seminar.register')}
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-10 py-4 rounded-full transition duration-300 inline-block text-lg">
                    Beli Tiket Sekarang →
                </Link>
            </section>

        </Layout>
    );
}