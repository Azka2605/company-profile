import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Navbar() {
    const { auth } = usePage().props;

    return (
        <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="text-yellow-400 font-bold text-2xl tracking-widest">
                    EEA <span className="text-white">2026</span>
                </Link>

                {/* Menu */}
                <div className="flex items-center gap-8">

                    {/* Competition Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-white hover:text-yellow-400 transition duration-300">
                            Competition
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            {[
                                { label: '🚀 Roket Air', type: 'roket_air' },
                                { label: '💡 IoT', type: 'iot' },
                                { label: '🎨 UI/UX', type: 'uiux' },
                                { label: '🖼️ Desain Poster', type: 'desain_poster' },
                            ].map((item) => (
                                <Link key={item.type}
                                    href={`/competition?type=${item.type}`}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition">
                                    {item.label}
                                </Link>
                            ))}
                            <div className="border-t border-gray-100 mt-1 pt-1">
                                <Link href="/competition"
                                    className="block px-4 py-2 text-sm text-gray-500 hover:bg-yellow-50 hover:text-yellow-600 transition">
                                    Lihat Semua →
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/seminar" className="text-white hover:text-yellow-400 transition duration-300">Seminar</Link>

                    {/* Auth */}
                    {auth.user ? (
                        <div className="relative group">
                            <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded-full text-sm transition duration-300">
                                <span>{auth.user.name.split(' ')[0]}</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <div className="px-4 py-2 border-b border-gray-100">
                                    <p className="text-sm font-semibold text-gray-900">{auth.user.name}</p>
                                    <p className="text-xs text-gray-400">{auth.user.email}</p>
                                </div>
                                <Link href={route('dashboard')}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition">
                                    Dashboard
                                </Link>
                                <Link href={route('logout')} method="post" as="button"
                                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition">
                                    Logout
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <Link href={route('login')}
                            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-5 py-2 rounded-full text-sm transition duration-300">
                            Login
                        </Link>
                    )}
                </div>

            </div>
        </nav>
    );
}