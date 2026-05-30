import React, { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, User, LogOut, LayoutDashboard } from "lucide-react";

export default function Navbar() {
    const { auth } = usePage().props;
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Beranda", href: "/", active: route().current("home") || window.location.pathname === '/' },
        { name: "Kompetisi", href: "/competition", active: route().current("competition*") },
        { name: "Seminar", href: "/seminar", active: route().current("seminar") },
    ];

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-3 shadow-2xl" : "bg-transparent py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-yellow-400 blur-md opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                        <img src="/images/logo-eea.png" alt="EEA" className="w-9 h-9 object-contain relative z-10" onError={(e) => { e.target.style.display = 'none'; }} />
                    </div>
                    <span className="text-white font-bold text-xl md:text-2xl tracking-widest flex items-center">
                        EEA <span className="text-yellow-400 ml-1">2026</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-1 bg-slate-900/50 p-1 rounded-full border border-white/5 backdrop-blur-sm">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                                    link.active ? "text-slate-900" : "text-slate-300 hover:text-white"
                                }`}
                            >
                                {link.active && (
                                    <motion.div 
                                        layoutId="navIndicator"
                                        className="absolute inset-0 bg-yellow-400 rounded-full z-0 shadow-[0_0_15px_rgba(250,204,21,0.4)]"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Auth */}
                    {auth.user ? (
                        <div className="relative">
                            <button 
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-medium px-4 py-2 rounded-full text-sm transition-all duration-300 group"
                            >
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center text-slate-900 font-bold text-xs uppercase">
                                    {auth.user.name.charAt(0)}
                                </div>
                                <span>{auth.user.name.split(" ")[0]}</span>
                                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {dropdownOpen && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 mt-3 w-56 bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl py-2 z-50 overflow-hidden backdrop-blur-xl"
                                    >
                                        <div className="px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                                            <p className="text-sm font-bold text-white truncate">{auth.user.name}</p>
                                            <p className="text-xs text-slate-400 truncate mt-0.5">{auth.user.email}</p>
                                        </div>
                                        <div className="p-2 space-y-1">
                                            <Link href={route("dashboard")} className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white rounded-xl transition-colors">
                                                <LayoutDashboard className="w-4 h-4 text-slate-400" /> Dashboard
                                            </Link>
                                            <Link href={route("profile.edit")} className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white rounded-xl transition-colors">
                                                <User className="w-4 h-4 text-slate-400" /> Profil
                                            </Link>
                                            <div className="h-px bg-slate-800 my-1 mx-2"></div>
                                            <Link href={route("logout")} method="post" as="button" className="flex items-center gap-3 w-full text-left px-3 py-2.5 text-sm text-red-400 hover:bg-red-400/10 hover:text-red-300 rounded-xl transition-colors">
                                                <LogOut className="w-4 h-4" /> Keluar
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Link href={route("login")} className="text-slate-300 hover:text-white font-medium text-sm transition-colors">
                                Masuk
                            </Link>
                            <Link href={route("register")} className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold px-6 py-2 rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:-translate-y-0.5">
                                Daftar
                            </Link>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden text-slate-300 hover:text-white transition-colors"
                >
                    {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`px-4 py-3 rounded-xl font-semibold text-lg transition-colors ${
                                        link.active ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20" : "text-slate-300 hover:bg-slate-900"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="h-px bg-slate-800 my-2"></div>

                            {auth.user ? (
                                <div className="space-y-3">
                                    <div className="px-4 py-2">
                                        <p className="text-base font-bold text-white">{auth.user.name}</p>
                                        <p className="text-sm text-slate-400">{auth.user.email}</p>
                                    </div>
                                    <Link href={route("dashboard")} className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-900 rounded-xl">
                                        <LayoutDashboard className="w-5 h-5" /> Dashboard
                                    </Link>
                                    <Link href={route("logout")} method="post" as="button" className="flex items-center gap-3 w-full text-left px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl">
                                        <LogOut className="w-5 h-5" /> Keluar
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-3 mt-2">
                                    <Link href={route("login")} className="px-4 py-3 text-center rounded-xl font-bold text-slate-300 border border-slate-700 hover:bg-slate-800">
                                        Masuk
                                    </Link>
                                    <Link href={route("register")} className="px-4 py-3 text-center rounded-xl font-bold bg-yellow-400 text-slate-900 shadow-lg shadow-yellow-400/20">
                                        Daftar Akun Baru
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}