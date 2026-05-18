import React from 'react';
import Navbar from './Navbar';
import { Link } from '@inertiajs/react';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <Navbar />
            <main className="pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-12 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand */}
                    <div>
                        <div className="text-yellow-400 font-bold text-2xl tracking-widest mb-3">
                            EEA <span className="text-white">2026</span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Electrical Engineering in Action.<br />
                            Himpunan Mahasiswa Teknik Elektro UNILA.
                        </p>
                    </div>

                    {/* Navigasi */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Navigasi</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
                            <li><Link href="/seminar" className="hover:text-yellow-400 transition">Seminar</Link></li>
                            <li><Link href="/competition" className="hover:text-yellow-400 transition">Competition</Link></li>
                            <li><Link href="/about" className="hover:text-yellow-400 transition">About</Link></li>
                            <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Kontak</h4>
                        <ul className="space-y-2 text-sm">
                            <li>📧 eea@unila.ac.id</li>
                            <li>📍 Universitas Lampung</li>
                            <li>📱 Instagram: @eea_unila</li>
                        </ul>
                    </div>

                </div>

                <div className="max-w-6xl mx-auto border-t border-gray-800 mt-10 pt-6 text-center text-sm">
                    © 2026 EEA — Electrical Engineering in Action. All rights reserved.
                </div>
            </footer>
        </div>
    );
}