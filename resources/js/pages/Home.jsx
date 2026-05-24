import React, { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
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
                        <img src={item.img} alt={`EEA ${item.year}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = `<div style="color:#d1d5db;font-size:18px;font-weight:bold;">📷 Foto EEA ${item.year}</div>`;
                            }} />
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
                        className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'bg-yellow-400 w-6' : 'bg-gray-300 w-2'}`} />
                ))}
            </div>
        </div>
    );
}

export default function Home({ competitions, timelines, seminar }) {
    return (
        <Layout>

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-white overflow-hidden">

                {/* Background dot grid */}
                <div className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                        opacity: 0.5
                    }}
                />

                {/* Gold glow blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-0"
                    style={{
                        background: 'radial-gradient(circle, rgba(250,204,21,0.12) 0%, transparent 70%)'
                    }}
                />

                {/* Circuit lines decorative */}
                <svg className="absolute top-0 left-0 w-full h-full z-0 opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#111827" strokeWidth="1" />
                    <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#111827" strokeWidth="1" />
                    <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#111827" strokeWidth="1" />
                    <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#111827" strokeWidth="1" />
                    <circle cx="20%" cy="30%" r="4" fill="#FACC15" />
                    <circle cx="80%" cy="30%" r="4" fill="#FACC15" />
                    <circle cx="20%" cy="70%" r="4" fill="#FACC15" />
                    <circle cx="80%" cy="70%" r="4" fill="#FACC15" />
                </svg>

                <div className="relative z-10 flex flex-col items-center">

                    <img
                        src="/images/logo-eea.png"
                        alt="EEA 2026"
                        className="w-40 md:w-56 mb-8 drop-shadow-sm"
                        style={{ animation: 'fadeSlideUp 0.7s ease both' }}
                    />

                    <span
                        className="bg-yellow-50 text-yellow-600 text-xs font-semibold px-5 py-1.5 rounded-full border border-yellow-200 mb-6 tracking-widest uppercase"
                        style={{ animation: 'fadeSlideUp 0.7s ease 0.1s both' }}
                    >
                        Electrical Engineering in Action
                    </span>

                    <h1
                        className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight"
                        style={{ animation: 'fadeSlideUp 0.7s ease 0.2s both' }}
                    >
                        EEA{' '}
                        <span
                            className="text-yellow-400"
                            style={{ textShadow: '0 0 40px rgba(250,204,21,0.4)' }}
                        >
                            2026
                        </span>
                    </h1>

                    <p
                        className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed"
                        style={{ animation: 'fadeSlideUp 0.7s ease 0.3s both' }}
                    >
                        Program kerja besar Himpunan Mahasiswa Teknik Elektro UNILA yang menghadirkan
                        Seminar Nasional dan berbagai Kompetisi bergengsi.
                    </p>

                    <div
                        className="flex gap-4 flex-wrap justify-center"
                        style={{ animation: 'fadeSlideUp 0.7s ease 0.4s both' }}
                    >
                        <Link href="/seminar"
                            className="group relative bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-xl text-sm
                                       transition-all duration-300 hover:bg-yellow-300 hover:scale-[1.04]
                                       hover:shadow-[0_0_24px_rgba(250,204,21,0.5)]">
                            Beli Tiket Seminar
                        </Link>
                        <Link href="/competition"
                            className="border border-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-xl text-sm
                                       transition-all duration-300 hover:border-yellow-400 hover:text-yellow-500
                                       hover:scale-[1.04] hover:shadow-[0_0_16px_rgba(250,204,21,0.2)] bg-white">
                            Daftar Lomba →
                        </Link>
                    </div>

                </div>
            </section>

            {/* About Section */}
            <section className="py-24 px-6 bg-gray-50 relative overflow-hidden">
                <div
                    className="absolute right-0 top-0 w-64 h-64 rounded-full opacity-30"
                    style={{ background: 'radial-gradient(circle, rgba(250,204,21,0.2) 0%, transparent 70%)' }}
                />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="text-yellow-500 font-semibold text-xs uppercase tracking-widest">Tentang EEA</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6 tracking-tight">
                        Apa itu EEA 2026?
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        Electrical Engineering in Action (EEA) adalah program kerja besar tahunan
                        Himpunan Mahasiswa Teknik Elektro Universitas Lampung. EEA 2026 menghadirkan
                        Seminar Nasional dan 4 kompetisi bergengsi yang terbuka untuk seluruh mahasiswa Indonesia.
                    </p>

                    {/* Stats row */}
                    <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                        {[
                            { num: competitions.length, label: 'Kompetisi' },
                            { num: '1', label: 'Seminar Nasional' },
                            { num: '∞', label: 'Kesempatan' },
                        ].map((s, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100
                                                    shadow-sm hover:shadow-md hover:border-yellow-200
                                                    transition-all duration-300 hover:-translate-y-1">
                                <p className="text-3xl font-bold text-yellow-400 mb-1">{s.num}</p>
                                <p className="text-sm text-gray-400">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 px-6 bg-white relative overflow-hidden">
                <div className="absolute left-1/2 top-0 h-full w-[520px] -translate-x-1/2 rounded-full bg-yellow-100 opacity-30" />
                <div className="relative max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-yellow-500 font-semibold text-xs uppercase tracking-widest">
                            Timeline
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 tracking-tight">
                            Agenda Penting EEA 2026
                        </h2>
                        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                            Ikuti rangkaian acara penting dari pendaftaran hingga pengumuman pemenang.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {timelines.map((item, index) => (
                            <div key={index} className="rounded-[2rem] border border-gray-100 bg-gray-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                                <div className="mb-4 inline-flex rounded-full bg-yellow-50 px-4 py-2 text-sm font-semibold text-yellow-600">
                                    {item.date}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Competition Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-yellow-500 font-semibold text-xs uppercase tracking-widest">Kompetisi</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 tracking-tight">
                            {competitions.length} Lomba yang Bisa Kamu Ikuti
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {competitions.map((item, i) => (
                            <div key={i}
                                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm
                                  hover:shadow-lg hover:border-yellow-200 hover:-translate-y-2
                                     transition-all duration-300 text-center cursor-pointer">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-base font-bold text-gray-900 mb-2">{item.name}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                                <Link href={`/competition?type=${item.slug}`}
                                    className="text-yellow-500 text-sm font-semibold hover:text-yellow-600
                           transition-colors duration-200">
                                    Lihat detail →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Seminar Section */}
            <section className="py-24 px-6 bg-gray-50 relative overflow-hidden">
                <div
                    className="absolute left-0 bottom-0 w-80 h-80 rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, rgba(250,204,21,0.3) 0%, transparent 70%)' }}
                />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 md:p-14
                                    flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <span className="text-yellow-500 font-semibold text-xs uppercase tracking-widest">
                                Seminar Nasional
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4 tracking-tight">
                                {seminar?.title ?? 'Seminar Nasional EEA 2026'}
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8 text-sm">
                                {seminar?.description ?? 'Dapatkan wawasan dan inspirasi dari para ahli.'}
                            </p>
                            ...
                            <p className="text-5xl font-bold text-yellow-400 mb-1" style={{ textShadow: '0 0 30px rgba(250,204,21,0.3)' }}>
                                {seminar ? `Rp ${seminar.price.toLocaleString('id-ID')}` : 'Rp ???'}
                            </p>
                            <p className="text-gray-400 text-xs">per orang</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visi & Misi */}
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
                                <li className="flex gap-2"><span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 shrink-0"></span>Menyelenggarakan seminar nasional berkualitas</li>
                                <li className="flex gap-2"><span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 shrink-0"></span>Memfasilitasi kompetisi yang inovatif</li>
                                <li className="flex gap-2"><span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 shrink-0"></span>Membangun jejaring antar mahasiswa Indonesia</li>
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

            {/* Tim Panitia */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Panitia</span>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Diselenggarakan oleh</h2>
                    <p className="text-gray-500 text-lg">
                        Himpunan Mahasiswa Teknik Elektro<br />
                        <span className="font-bold text-gray-900">Universitas Lampung</span>
                    </p>
                </div>
            </section>

            {/* Keyframe animations */}
            <style>{`
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>

        </Layout>
    );
}