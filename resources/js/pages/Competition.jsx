import React, { useState } from 'react';
import Layout from '../Components/Layout';
import { Link, usePage } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Calendar, CheckCircle2, ArrowRight, Zap, Target, Rocket } from 'lucide-react';

// Fallback icon mapper in case data passes emojis
const getIcon = (iconStr, fallbackIdx) => {
    const icons = [<Rocket className="w-6 h-6"/>, <Target className="w-6 h-6"/>, <Zap className="w-6 h-6"/>, <Trophy className="w-6 h-6"/>];
    return icons[fallbackIdx % icons.length];
};

export default function Competition({ competitions = [] }) {
    const { url } = usePage();
    const params = new URLSearchParams(url.split('?')[1]);
    const typeFromUrl = params.get('type');

    const [active, setActive] = useState(typeFromUrl ?? competitions[0]?.slug ?? '');
    const selected = competitions.find(c => c.slug === active) ?? competitions[0];

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <Layout>
            {/* Hero Section - Premium Dark */}
            <section className="relative bg-slate-950 pt-32 pb-24 px-6 text-center overflow-hidden border-b border-slate-900">
                {/* Background effects */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[20%] w-[40%] h-[50%] rounded-full bg-yellow-500/10 blur-[100px] mix-blend-screen"></div>
                    <div className="absolute bottom-[-10%] right-[10%] w-[30%] h-[40%] rounded-full bg-blue-500/10 blur-[100px] mix-blend-screen"></div>
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                        <span className="inline-flex items-center gap-2 bg-slate-800/50 text-yellow-400 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-slate-700/50 mb-6 backdrop-blur-md">
                            <Trophy className="w-4 h-4" /> Kompetisi Utama
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                            EEA Competition <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">2026</span>
                        </h1>
                        <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
                            Pilih ajang pembuktianmu. Daftarkan dirimu, tunjukkan inovasi terbaik, dan bawa pulang total hadiah puluhan juta rupiah.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="bg-slate-50 py-20 px-6 relative">
                <div className="max-w-6xl mx-auto">
                    {/* Tab Selector */}
                    <div className="flex flex-wrap gap-3 justify-center mb-16 relative z-20">
                        {competitions.map((c, idx) => {
                            const isActive = active === c.slug;
                            return (
                                <button
                                    key={c.slug}
                                    onClick={() => setActive(c.slug)}
                                    className={`relative px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 overflow-hidden ${
                                        isActive 
                                            ? 'text-slate-900 shadow-md transform scale-105' 
                                            : 'bg-white border border-slate-200 text-slate-500 hover:border-yellow-300 hover:text-slate-800'
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div 
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-yellow-400 z-0"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{getIcon(c.icon, idx)}</span>
                                    <span className="relative z-10">{c.name}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Competition Details Card */}
                    <AnimatePresence mode="wait">
                        {selected && (
                            <motion.div 
                                key={selected.slug}
                                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden relative z-10"
                            >
                                {/* Decorative card accent */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500"></div>
                                
                                <div className="p-8 md:p-14 flex flex-col lg:flex-row gap-12 lg:gap-20">
                                    
                                    {/* Left Column (Info & Requirements) */}
                                    <div className="flex-1">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-50 text-yellow-500 mb-6">
                                            {getIcon(selected.icon, competitions.findIndex(c => c.slug === selected.slug))}
                                        </div>
                                        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">{selected.name}</h2>
                                        <p className="text-slate-500 leading-relaxed text-lg mb-8">
                                            {selected.description}
                                        </p>

                                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                <Target className="w-5 h-5 text-yellow-500" /> Syarat & Ketentuan
                                            </h3>
                                            <ul className="space-y-3">
                                                {(selected.requirements?.length > 0 ? selected.requirements : [
                                                    { item: 'Mahasiswa aktif D3/D4/S1 seluruh Indonesia' },
                                                    { item: 'Satu tim terdiri dari maksimal 3 orang' },
                                                    { item: 'Wajib mengunggah scan KTM saat pendaftaran' }
                                                ]).map((r, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm md:text-base leading-relaxed">
                                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                                        {r.item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-10">
                                            <Link href={`/competition/${selected.slug}/register`}
                                                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:-translate-y-1 text-lg w-full sm:w-auto">
                                                Daftar Sekarang
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Right Column (Prizes & Timeline) */}
                                    <div className="flex-1 space-y-10">
                                        {/* Prizes */}
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-2">
                                                <Trophy className="w-6 h-6 text-yellow-500" /> Total Hadiah
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                {['Juara 1', 'Juara 2', 'Juara 3'].map((title, i) => {
                                                    const prizeData = selected.prizes?.[i]?.hadiah;
                                                    const colors = [
                                                        'bg-yellow-50 border-yellow-200 text-yellow-700', // Gold
                                                        'bg-slate-50 border-slate-200 text-slate-600',   // Silver
                                                        'bg-orange-50 border-orange-200 text-orange-700' // Bronze
                                                    ];
                                                    const medals = ['🥇', '🥈', '🥉'];
                                                    
                                                    return (
                                                        <div key={i} className={`${colors[i]} border rounded-2xl p-5 text-center relative overflow-hidden group`}>
                                                            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{medals[i]}</div>
                                                            <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">{title}</p>
                                                            <p className="text-lg font-extrabold">
                                                                {prizeData ?? 'TBD'}
                                                            </p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        {/* Timeline Stepper */}
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-2">
                                                <Calendar className="w-6 h-6 text-yellow-500" /> Jadwal Penting
                                            </h3>
                                            <div className="relative border-l-2 border-slate-100 ml-3 space-y-8 pb-4">
                                                {(selected.timeline?.length > 0 ? selected.timeline : [
                                                    { label: 'Pendaftaran Gelombang 1', date: '1-15 Agustus 2026' },
                                                    { label: 'Pendaftaran Gelombang 2', date: '16-30 Agustus 2026' },
                                                    { label: 'Technical Meeting', date: '5 September 2026' },
                                                    { label: 'Hari Pelaksanaan', date: '15 September 2026' }
                                                ]).map((t, i) => (
                                                    <div key={i} className="relative pl-8 group">
                                                        <div className="absolute -left-[17px] top-0.5 w-8 h-8 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center group-hover:border-yellow-400 transition-colors">
                                                            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-yellow-500 transition-colors"></span>
                                                        </div>
                                                        <p className="font-bold text-slate-900 mb-1">{t.label}</p>
                                                        <p className="text-slate-500 text-sm font-medium">{t.date}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </Layout>
    );
}