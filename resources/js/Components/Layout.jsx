import React from 'react';
import Navbar from './Navbar';
import { Link } from '@inertiajs/react';
import { Mail, MapPin } from 'lucide-react';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-yellow-400 selection:text-slate-900">
            <Navbar />

            <main>
                {children}
            </main>

            {/* Footer - Premium Dark */}
            <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 px-6 relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
                    {/* Brand */}
                    <div className="md:col-span-5">
                        <Link href="/" className="inline-block mb-6 group">
                            <div className="flex items-center gap-3">
                                <img src="/images/logo-eea.png" alt="EEA" className="w-12 h-12 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                                <span className="text-white font-bold text-3xl tracking-widest flex items-center">
                                    EEA <span className="text-yellow-400 ml-1">2026</span>
                                </span>
                            </div>
                        </Link>
                        <p className="text-slate-400 leading-relaxed text-lg max-w-sm">
                            Wadah inovasi dan kreativitas mahasiswa teknik elektro se-Indonesia melalui kompetisi dan seminar nasional.
                        </p>
                    </div>

                    {/* Navigasi */}
                    <div className="md:col-span-3 md:col-start-7">
                        <h4 className="text-white font-bold text-lg mb-6">Jelajahi</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-slate-400 hover:text-yellow-400 transition-colors">Beranda</Link></li>
                            <li><Link href="/competition" className="text-slate-400 hover:text-yellow-400 transition-colors">Kompetisi</Link></li>
                            <li><Link href="/seminar" className="text-slate-400 hover:text-yellow-400 transition-colors">Seminar Nasional</Link></li>
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-bold text-lg mb-6">Hubungi Kami</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400">
                                <Mail className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                                <a href="mailto:officialeea@gmail.com" className="hover:text-yellow-400 transition-colors">officialeea@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-3 text-slate-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                <a href="https://instagram.com/eea.unila" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">@eea.unila</a>
                            </li>
                            <li className="flex items-start gap-3 text-slate-400">
                                <MapPin className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                                <span>Gedung H Teknik, Universitas Lampung, Bandar Lampung.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto border-t border-slate-800/50 mt-16 pt-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm font-medium">
                        © {new Date().getFullYear()} EEA — Electrical Engineering in Action.
                    </p>
                    <p className="text-slate-600 text-sm flex items-center gap-1">
                        <span className="text-red-500 animate-pulse"></span> HIMATRO
                    </p>
                </div>
            </footer>
        </div>
    );
}