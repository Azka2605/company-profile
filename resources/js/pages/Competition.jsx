import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import Layout from '../Components/Layout';

const competitions = [
    {
        id: 'roket_air',
        icon: '🚀',
        title: 'Roket Air',
        desc: 'Kompetisi merancang dan meluncurkan roket air dengan ketinggian dan akurasi terbaik.',
        timeline: [
            { label: 'Pendaftaran', date: 'TBD' },
            { label: 'Technical Meeting', date: 'TBD' },
            { label: 'Pelaksanaan', date: 'TBD' },
            { label: 'Pengumuman', date: 'TBD' },
        ],
        prizes: ['Rp TBD', 'Rp TBD', 'Rp TBD'],
        requirements: ['Mahasiswa aktif', 'Tim 2-3 orang', 'Membawa alat sendiri'],
    },
    {
        id: 'iot',
        icon: '💡',
        title: 'IoT',
        desc: 'Kompetisi inovasi berbasis Internet of Things untuk memecahkan masalah nyata di masyarakat.',
        timeline: [
            { label: 'Pendaftaran', date: 'TBD' },
            { label: 'Technical Meeting', date: 'TBD' },
            { label: 'Pelaksanaan', date: 'TBD' },
            { label: 'Pengumuman', date: 'TBD' },
        ],
        prizes: ['Rp TBD', 'Rp TBD', 'Rp TBD'],
        requirements: ['Mahasiswa aktif', 'Tim 2-3 orang', 'Proposal inovasi'],
    },
    {
        id: 'uiux',
        icon: '🎨',
        title: 'UI/UX',
        desc: 'Kompetisi desain antarmuka yang intuitif, menarik, dan berpusat pada pengguna.',
        timeline: [
            { label: 'Pendaftaran', date: 'TBD' },
            { label: 'Technical Meeting', date: 'TBD' },
            { label: 'Pelaksanaan', date: 'TBD' },
            { label: 'Pengumuman', date: 'TBD' },
        ],
        prizes: ['Rp TBD', 'Rp TBD', 'Rp TBD'],
        requirements: ['Mahasiswa aktif', 'Tim 1-2 orang', 'Figma / Adobe XD'],
    },
    {
        id: 'desain_poster',
        icon: '🖼️',
        title: 'Desain Poster',
        desc: 'Kompetisi desain poster kreatif bertema teknologi dan kelistrikan.',
        timeline: [
            { label: 'Pendaftaran', date: 'TBD' },
            { label: 'Pengumpulan Karya', date: 'TBD' },
            { label: 'Penjurian', date: 'TBD' },
            { label: 'Pengumuman', date: 'TBD' },
        ],
        prizes: ['Rp TBD', 'Rp TBD', 'Rp TBD'],
        requirements: ['Mahasiswa aktif', 'Individual', 'Format PNG/PDF'],
    },
];

export default function Competition() {

    const [active, setActive] = useState('roket_air');
    const selected = competitions.find(c => c.id === active);

    return (
        <Layout>

            {/* Hero */}
            <section className="bg-white py-20 px-6 text-center border-b border-gray-100">
                <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Kompetisi</span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                    EEA Competition <span className="text-yellow-500">2026</span>
                </h1>
                <p className="text-gray-500 max-w-xl mx-auto text-lg">
                    Pilih lomba yang sesuai minat dan kemampuanmu. Daftarkan dirimu sekarang!
                </p>
            </section>

            {/* Tab Selector */}
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-6xl mx-auto">

                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {competitions.map(c => (
                            <button
                                key={c.id}
                                onClick={() => setActive(c.id)}
                                className={`px-6 py-2 rounded-full font-semibold text-sm transition duration-300 ${
                                    active === c.id
                                        ? 'bg-yellow-400 text-gray-900'
                                        : 'bg-white border border-gray-200 text-gray-500 hover:border-yellow-300'
                                }`}>
                                {c.icon} {c.title}
                            </button>
                        ))}
                    </div>

                    {/* Detail Lomba */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12">
                        <div className="flex flex-col md:flex-row gap-12">

                            {/* Kiri */}
                            <div className="flex-1">
                                <div className="text-5xl mb-4">{selected.icon}</div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-3">{selected.title}</h2>
                                <p className="text-gray-500 leading-relaxed mb-6">{selected.desc}</p>

                                <h3 className="font-bold text-gray-900 mb-3">Persyaratan</h3>
                                <ul className="space-y-2">
                                    {selected.requirements.map((r, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                                            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                            {r}
                                        </li>
                                    ))}
                                </ul>

                                <Link href={`/competition/${selected.id}/register`}
                                    className="mt-8 inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full transition duration-300">
                                    Daftar Sekarang
                                </Link>
                            </div>

                            {/* Kanan */}
                            <div className="flex-1 space-y-6">

                                {/* Hadiah */}
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-4">Hadiah</h3>
                                    <div className="grid grid-cols-3 gap-3">
                                        {['🥇', '🥈', '🥉'].map((medal, i) => (
                                            <div key={i} className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 text-center">
                                                <div className="text-2xl mb-1">{medal}</div>
                                                <p className="text-xs text-gray-400">Juara {i + 1}</p>
                                                <p className="text-sm font-bold text-gray-900">{selected.prizes[i]}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Timeline */}
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-4">Timeline</h3>
                                    <div className="space-y-3">
                                        {selected.timeline.map((t, i) => (
                                            <div key={i} className="flex items-center gap-4">
                                                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-gray-900">
                                                    {i + 1}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900 text-sm">{t.label}</p>
                                                    <p className="text-gray-400 text-xs">{t.date}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
}