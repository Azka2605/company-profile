import React from 'react';
import { Link } from '@inertiajs/react';
import Layout from '../Components/Layout';

export default function Home() {
    return (
        <Layout>

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-white">
                
                <img 
                    src="/images/logo-eea.png" 
                    alt="EEA 2026" 
                    className="w-48 md:w-64 mb-8"
                />

                <span className="bg-yellow-50 text-yellow-700 text-sm font-medium px-4 py-1 rounded-full border border-yellow-200 mb-6">
                    Electrical Engineering in Action
                </span>

                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
                    EEA <span className="text-yellow-500">2026</span>
                </h1>

                <p className="text-gray-500 text-lg max-w-xl mb-10 leading-relaxed">
                    Program kerja besar Himpunan Mahasiswa Teknik Elektro UNILA yang menghadirkan 
                    Seminar Nasional dan berbagai Kompetisi bergengsi.
                </p>

                <div className="flex gap-4 flex-wrap justify-center">
                    <Link href="/seminar"
                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full transition duration-300">
                        Beli Tiket Seminar
                    </Link>
                    <Link href="/competition"
                        className="border-2 border-yellow-400 text-yellow-500 hover:bg-yellow-400 hover:text-gray-900 font-bold px-8 py-3 rounded-full transition duration-300">
                        Daftar Lomba
                    </Link>
                </div>

            </section>

            {/* About Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Tentang EEA</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                        Apa itu EEA 2026?
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Electrical Engineering in Action (EEA) adalah program kerja besar tahunan 
                        Himpunan Mahasiswa Teknik Elektro Universitas Lampung. EEA 2026 menghadirkan 
                        Seminar Nasional dan 4 kompetisi bergengsi yang terbuka untuk seluruh mahasiswa Indonesia.
                    </p>
                </div>
            </section>

            {/* Competition Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Kompetisi</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                            4 Lomba yang Bisa Kamu Ikuti
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        
                        {[
                            { icon: '🚀', title: 'Roket Air', desc: 'Rancang dan luncurkan roket air terbaik kamu' },
                            { icon: '💡', title: 'IoT', desc: 'Inovasi teknologi berbasis Internet of Things' },
                            { icon: '🎨', title: 'UI/UX', desc: 'Desain antarmuka yang intuitif dan menarik' },
                            { icon: '🖼️', title: 'Desain Poster', desc: 'Ekspresikan kreativitasmu lewat desain poster' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-yellow-200 transition duration-300 text-center">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                                <Link href="/competition"
                                    className="mt-4 inline-block text-yellow-500 text-sm font-semibold hover:text-yellow-600">
                                    Lihat detail →
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Seminar Section */}
            <section className="py-20 px-6 bg-yellow-50">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1">
                        <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Seminar Nasional</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Seminar Nasional EEA 2026
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-6">
                            Dapatkan wawasan dan inspirasi dari para ahli dan praktisi terkemuka 
                            di bidang teknik elektro dan teknologi. Terbuka untuk umum.
                        </p>
                        <Link href="/seminar"
                            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full transition duration-300 inline-block">
                            Beli Tiket Sekarang
                        </Link>
                    </div>
                    <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-yellow-100 text-center">
                        <p className="text-gray-400 text-sm mb-2">Harga Tiket</p>
                        <p className="text-5xl font-bold text-yellow-500 mb-1">Rp ???</p>
                        <p className="text-gray-400 text-sm">per orang</p>
                    </div>
                </div>
            </section>

        </Layout>
    );
}