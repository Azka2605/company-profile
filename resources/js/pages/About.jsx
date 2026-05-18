import React, { useState } from 'react';
import Layout from '../Components/Layout';

const eeaData = [
    { year: '2018', pesertaLomba: '???', pesertaSeminar: '???', img: '/images/eea-2018.jpg' },
    { year: '2019', pesertaLomba: '???', pesertaSeminar: '???', img: '/images/eea-2019.jpg' },
    { year: '2020', pesertaLomba: '???', pesertaSeminar: '???', img: '/images/eea-2020.jpg' },
    { year: '2021', pesertaLomba: '???', pesertaSeminar: '???', img: '/images/eea-2021.jpg' },
    { year: '2022', pesertaLomba: '???', pesertaSeminar: '???', img: '/images/eea-2022.jpg' },
    { year: '2023', pesertaLomba: '???', pesertaSeminar: '???', img: '/images/eea-2023.jpg' },
    { year: '2024', pesertaLomba: '???', pesertaSeminar: '???', img: '/images/eea-2024.jpg' },
    { year: '2025', pesertaLomba: '???', pesertaSeminar: '???', img: '/images/eea-2025.jpg' },
];

function EEASlider() {
    const [active, setActive] = useState(0);
    const prev = () => setActive(i => (i === 0 ? eeaData.length - 1 : i - 1));
    const next = () => setActive(i => (i === eeaData.length - 1 ? 0 : i + 1));
    const item = eeaData[active];

    return (
        <div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1 aspect-video bg-gray-100 flex items-center justify-center">
                        <img
                            src={item.img}
                            alt={`EEA ${item.year}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = `<div style="color:#d1d5db;font-size:18px;font-weight:bold;">📷 Foto EEA ${item.year}</div>`;
                            }}
                        />
                    </div>
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                        <div className="inline-block bg-yellow-400 text-gray-900 font-bold text-3xl px-6 py-2 rounded-full mb-6 w-fit">
                            EEA {item.year}
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                                <p className="text-3xl font-bold text-yellow-500">{item.pesertaLomba}</p>
                                <p className="text-gray-400 text-sm mt-1">Peserta Lomba</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                                <p className="text-3xl font-bold text-yellow-500">{item.pesertaSeminar}</p>
                                <p className="text-gray-400 text-sm mt-1">Peserta Seminar</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button onClick={prev}
                                className="w-10 h-10 rounded-full border-2 border-yellow-400 text-yellow-500 font-bold hover:bg-yellow-400 hover:text-gray-900 transition duration-300 flex items-center justify-center">
                                ←
                            </button>
                            <span className="text-gray-400 text-sm">{active + 1} / {eeaData.length}</span>
                            <button onClick={next}
                                className="w-10 h-10 rounded-full border-2 border-yellow-400 text-yellow-500 font-bold hover:bg-yellow-400 hover:text-gray-900 transition duration-300 flex items-center justify-center">
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
                {eeaData.map((_, i) => (
                    <button key={i} onClick={() => setActive(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'bg-yellow-400 w-6' : 'bg-gray-300 w-2'}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function About() {
    return (
        <Layout>

            {/* Hero */}
            <section className="bg-white py-20 px-6 text-center border-b border-gray-100">
                <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Tentang Kami</span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                    Apa itu <span className="text-yellow-500">EEA?</span>
                </h1>
                <p className="text-gray-500 max-w-xl mx-auto text-lg">
                    Mengenal lebih dekat program kerja besar Himpunan Mahasiswa Teknik Elektro UNILA.
                </p>
            </section>

            {/* About EEA */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <img src="/images/logo-eea.png" alt="EEA 2026" className="w-64 mx-auto" />
                    </div>
                    <div className="flex-1">
                        <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">EEA 2026</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                            Electrical Engineering in Action
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-4">
                            Electrical Engineering in Action (EEA) adalah program kerja besar tahunan
                            Himpunan Mahasiswa Teknik Elektro Universitas Lampung (HIMATERA UNILA).
                        </p>
                        <p className="text-gray-500 leading-relaxed">
                            EEA 2026 hadir dengan semangat inovasi dan kolaborasi, menghadirkan
                            Seminar Nasional dan 4 kompetisi bergengsi yang terbuka untuk seluruh mahasiswa Indonesia.
                        </p>
                    </div>
                </div>
            </section>

            {/* Visi Misi */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Visi & Misi</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2">Tujuan EEA 2026</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-8">
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Visi</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Menjadi wadah pengembangan inovasi dan kreativitas mahasiswa teknik
                                elektro di tingkat nasional.
                            </p>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-8">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Misi</h3>
                            <ul className="text-gray-500 space-y-2">
                                <li className="flex gap-2">
                                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 shrink-0"></span>
                                    Menyelenggarakan seminar nasional berkualitas
                                </li>
                                <li className="flex gap-2">
                                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 shrink-0"></span>
                                    Memfasilitasi kompetisi yang inovatif
                                </li>
                                <li className="flex gap-2">
                                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 shrink-0"></span>
                                    Membangun jejaring antar mahasiswa Indonesia
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* EEA dari Masa ke Masa */}
            <section className="py-20 px-6 bg-gray-50 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Perjalanan EEA</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2">EEA dari Masa ke Masa</h2>
                        <p className="text-gray-500 mt-2">Jejak langkah EEA sejak pertama kali diselenggarakan</p>
                    </div>
                    <EEASlider />
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { value: '4', label: 'Kompetisi' },
                            { value: '1', label: 'Seminar Nasional' },
                            { value: '8+', label: 'Tahun Berjalan' },
                            { value: 'UNILA', label: 'Universitas Lampung' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm p-6">
                                <p className="text-3xl font-bold text-yellow-500 mb-1">{s.value}</p>
                                <p className="text-gray-400 text-sm">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tim Panitia */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center">
                    <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Panitia</span>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Diselenggarakan oleh</h2>
                    <p className="text-gray-500 text-lg">
                        Himpunan Mahasiswa Teknik Elektro<br />
                        <span className="font-bold text-gray-900">Universitas Lampung</span>
                    </p>
                </div>
            </section>

        </Layout>
    );
}