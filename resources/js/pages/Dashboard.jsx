import React, { useEffect } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
    CreditCard, Clock, CheckCircle2, XCircle, 
    AlertCircle, Mic, Trophy, User, Calendar
} from 'lucide-react';
import Layout from '../Components/Layout';

export default function Dashboard({ seminar, competitions, client_key, snap_url }) {
    const { auth } = usePage().props;

    // Load Midtrans Snap script
    useEffect(() => {
        if (!snap_url || !client_key) return;
        const existing = document.querySelector(`script[src="${snap_url}"]`);
        if (existing) return;

        const script = document.createElement('script');
        script.src = snap_url;
        script.setAttribute('data-client-key', client_key);
        script.async = true;
        document.body.appendChild(script);
    }, [snap_url, client_key]);

    const bayarSekarang = (token) => {
        if (window.snap) {
            window.snap.pay(token, {
                onSuccess: () => { window.location.reload(); },
                onPending: () => { window.location.reload(); },
                onError:   () => { alert('Pembayaran gagal, coba lagi.'); },
            });
        } else {
            alert('Sistem pembayaran sedang disiapkan, tunggu sebentar lalu coba lagi.');
        }
    };

    const statusConfig = {
        pending:   { icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-200', text: 'Menunggu Pembayaran' },
        paid:      { icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'Lunas' },
        confirmed: { icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'Dikonfirmasi' },
        failed:    { icon: XCircle, color: 'text-rose-500', bg: 'bg-rose-50', border: 'border-rose-200', text: 'Gagal' },
        expired:   { icon: AlertCircle, color: 'text-slate-500', bg: 'bg-slate-50', border: 'border-slate-200', text: 'Expired' },
        rejected:  { icon: XCircle, color: 'text-rose-500', bg: 'bg-rose-50', border: 'border-rose-200', text: 'Ditolak' },
    };

    const StatusBadge = ({ status }) => {
        const config = statusConfig[status] || statusConfig.pending;
        const Icon = config.icon;
        
        return (
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${config.border} ${config.bg} ${config.color} text-sm font-semibold`}>
                <Icon className="w-4 h-4" />
                {config.text}
            </div>
        );
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <Layout>
            <Head title="Dashboard Peserta — EEA 2026" />

            <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    
                    {/* Header */}
                    <motion.div 
                        initial="hidden" animate="visible" variants={fadeIn}
                        className="bg-slate-950 rounded-[2rem] p-8 md:p-12 mb-10 relative overflow-hidden shadow-2xl"
                    >
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-[100px] mix-blend-overlay opacity-50 translate-x-1/3 -translate-y-1/2"></div>
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-slate-900 text-3xl font-bold shadow-lg shrink-0 border-4 border-slate-800">
                                {auth.user.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="text-center md:text-left">
                                <span className="text-yellow-400 font-bold text-xs uppercase tracking-widest bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20 mb-3 inline-block">Portal Peserta</span>
                                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Halo, {auth.user.name}! 👋</h1>
                                <p className="text-slate-400">Pantau status pendaftaran dan pembayaranmu di EEA 2026.</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        
                        {/* Seminar Section */}
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-500 flex items-center justify-center">
                                    <Mic className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Seminar Nasional</h2>
                            </div>

                            {seminar ? (
                                <div className="bg-white rounded-[1.5rem] p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-rose-400 to-rose-600"></div>
                                    
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 pl-2">
                                        <div>
                                            <h3 className="font-bold text-lg text-slate-900 mb-1">{seminar.name}</h3>
                                            <p className="text-sm text-slate-500 flex items-center gap-1.5">
                                                <User className="w-4 h-4" /> {seminar.institution}
                                            </p>
                                        </div>
                                        <StatusBadge status={seminar.payment_status} />
                                    </div>
                                    
                                    <div className="pl-2 border-t border-slate-100 pt-4 mt-2">
                                        {seminar.payment_status === 'pending' && seminar.midtrans_token ? (
                                            <button
                                                onClick={() => bayarSekarang(seminar.midtrans_token)}
                                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-yellow-500/20 hover:shadow-lg hover:-translate-y-0.5">
                                                <CreditCard className="w-5 h-5" /> Bayar Sekarang
                                            </button>
                                        ) : (
                                            <div className="text-sm text-slate-500 flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                                <Calendar className="w-4 h-4 text-slate-400" />
                                                Sampai jumpa di hari H acara!
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-white/50 border border-slate-200 border-dashed rounded-[1.5rem] p-8 text-center hover:bg-white hover:border-solid hover:shadow-md transition-all">
                                    <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Mic className="w-8 h-8" />
                                    </div>
                                    <p className="text-slate-500 mb-6 font-medium">Kamu belum mendaftar seminar.</p>
                                    <Link href={route('seminar.register')}
                                        className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-full text-sm transition shadow-md">
                                        Daftar Seminar
                                    </Link>
                                </div>
                            )}
                        </motion.div>

                        {/* Kompetisi Section */}
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-500 flex items-center justify-center">
                                    <Trophy className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Kompetisi</h2>
                            </div>

                            {competitions && competitions.length > 0 ? (
                                <div className="space-y-4">
                                    {competitions.map((c, i) => {
                                        const compStatus = c.payment_status ?? c.status;
                                        return (
                                            <div key={i} className="bg-white rounded-[1.5rem] p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group">
                                                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-400 to-blue-600"></div>
                                                
                                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 pl-2">
                                                    <div>
                                                        <h3 className="font-bold text-lg text-slate-900 mb-1">
                                                            {c.competition_type.replace(/_/g, ' ').toUpperCase()}
                                                        </h3>
                                                        <p className="text-sm text-slate-500 flex items-center gap-1.5">
                                                            <User className="w-4 h-4" />
                                                            {c.registration_type === 'tim' ? `Tim: ${c.team_name}` : 'Peserta Individu'}
                                                        </p>
                                                    </div>
                                                    <StatusBadge status={compStatus} />
                                                </div>

                                                <div className="pl-2 border-t border-slate-100 pt-4 mt-2">
                                                    {(compStatus === 'pending') && c.midtrans_token ? (
                                                        <button
                                                            onClick={() => bayarSekarang(c.midtrans_token)}
                                                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-yellow-500/20 hover:shadow-lg hover:-translate-y-0.5">
                                                            <CreditCard className="w-5 h-5" /> Bayar Sekarang
                                                        </button>
                                                    ) : (
                                                        <div className="text-sm text-slate-500 flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                                            <Calendar className="w-4 h-4 text-slate-400" />
                                                            Cek email secara berkala untuk update informasi
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="bg-white/50 border border-slate-200 border-dashed rounded-[1.5rem] p-8 text-center hover:bg-white hover:border-solid hover:shadow-md transition-all">
                                    <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Trophy className="w-8 h-8" />
                                    </div>
                                    <p className="text-slate-500 mb-6 font-medium">Kamu belum mendaftar lomba apapun.</p>
                                    <Link href="/competition"
                                        className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-full text-sm transition shadow-md">
                                        Lihat Daftar Lomba
                                    </Link>
                                </div>
                            )}
                        </motion.div>
                        
                    </div>
                </div>
            </div>
        </Layout>
    );
}