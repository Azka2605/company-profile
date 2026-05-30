import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Ticket, ArrowRight, Clock, CheckCircle2, Mic, Award } from 'lucide-react';
import Layout from '../Components/Layout';

export default function Seminar({ seminar, timelines = [] }) {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
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

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                        <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/10 text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-6 border border-yellow-500/20 backdrop-blur-sm shadow-sm">
                            ✨ Seminar Nasional
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                            {seminar?.title ?? 'Seminar Nasional'} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                                EEA 2026
                            </span>
                        </h1>
                        <p className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10">
                            {seminar?.description ?? 'Tingkatkan wawasan dan pemahamanmu bersama para ahli serta praktisi terkemuka di industri teknologi dan teknik elektro.'}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href={route('seminar.register')} className="w-full sm:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-400/20 flex items-center justify-center gap-2 group">
                                <Ticket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                Beli Tiket Sekarang
                            </Link>
                            <a href="#info" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                                Pelajari Lebih Lanjut
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Info Cards - Elevated Design */}
            <section id="info" className="py-20 px-6 bg-slate-50 relative -mt-10 z-20">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {[
                            { icon: Calendar, label: 'Tanggal Pelaksanaan', value: seminar?.date ? new Date(seminar.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Segera Hadir', bg: 'bg-blue-50', color: 'text-blue-600' },
                            { icon: MapPin, label: 'Lokasi Seminar', value: seminar?.location ?? 'Universitas Lampung', bg: 'bg-rose-50', color: 'text-rose-600' },
                            { icon: Ticket, label: 'Harga Tiket Masuk', value: seminar ? `Rp ${seminar.price.toLocaleString('id-ID')}` : 'Mulai Rp 50.000', bg: 'bg-emerald-50', color: 'text-emerald-600' },
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeIn} className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2">
                                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className={`w-8 h-8 ${item.color}`} />
                                </div>
                                <p className="text-slate-500 font-medium text-sm mb-2">{item.label}</p>
                                <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Speaker / Narasumber Section */}
            {(seminar?.speaker) && (
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="text-center mb-14"
                        >
                            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest bg-yellow-50 px-4 py-2 rounded-full border border-yellow-100">Narasumber Utama</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6 tracking-tight">Kenali Pembicara Kami</h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col md:flex-row items-center gap-10 bg-slate-950 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden shadow-2xl"
                        >
                            {/* Background glow */}
                            <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                            {/* Avatar */}
                            <div className="relative shrink-0">
                                <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-2xl shadow-yellow-500/20 border-4 border-yellow-400/30">
                                    <Mic className="w-16 h-16 text-slate-900" />
                                </div>
                                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg">
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                </div>
                            </div>

                            {/* Info */}
                            <div className="text-center md:text-left relative z-10">
                                <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-yellow-400/20 mb-4">
                                    <Award className="w-4 h-4" /> Keynote Speaker
                                </div>
                                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                                    {seminar.speaker}
                                </h3>
                                {seminar.speaker_title && (
                                    <p className="text-slate-400 text-lg font-medium">{seminar.speaker_title}</p>
                                )}

                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Timeline - Modern Stepper */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-20"
                    >
                        <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest bg-yellow-50 px-4 py-2 rounded-full border border-yellow-100">Agenda Acara</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6 tracking-tight">Rangkaian Kegiatan</h2>
                    </motion.div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 transform md:-translate-x-1/2"></div>

                        <div className="space-y-12">
                            {(timelines.length > 0 ? timelines : [
                                { title: 'Open Gate & Registrasi Ulang', date: '08:00 - 09:00 WIB', description: 'Peserta melakukan registrasi ulang dan menempati kursi yang telah disediakan sesuai dengan nomor tiket.' },
                                { title: 'Opening Ceremony', date: '09:00 - 09:30 WIB', description: 'Pembukaan acara oleh MC, menyanyikan lagu Indonesia Raya, pembacaan doa, dan sambutan dari ketua pelaksana.' },
                                { title: 'Materi Sesi 1', date: '09:30 - 11:30 WIB', description: 'Pemaparan materi oleh Keynote Speaker utama seputar inovasi teknologi masa kini.' },
                                { title: 'Ishoma (Istirahat, Sholat, Makan)', date: '11:30 - 13:00 WIB', description: 'Waktu istirahat, ibadah sholat dzuhur, dan makan siang bersama untuk seluruh peserta.' },
                            ]).map((t, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-yellow-400 rounded-full flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform">
                                        <span className="text-yellow-600 font-bold">{i + 1}</span>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`ml-20 md:ml-0 w-full md:w-1/2 ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                                        <div className="bg-slate-50 hover:bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default relative overflow-hidden">
                                            {/* Decorative hover effect */}
                                            <div className={`absolute top-0 w-1 h-full bg-yellow-400 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom ${i % 2 === 0 ? 'left-0' : 'right-0'}`}></div>

                                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-500 mb-4 shadow-sm ${i % 2 !== 0 && 'md:ml-auto md:flex-row-reverse'}`}>
                                                <Clock className="w-3.5 h-3.5 text-yellow-500" />
                                                {t.date}
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">{t.title}</h3>
                                            <p className="text-slate-500 leading-relaxed text-sm md:text-base">{t.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 p-12 md:p-20 rounded-[3rem] shadow-2xl"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/20 text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-6">Jangan Sampai Ketinggalan</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Siap Mengubah Masa Depanmu?</h2>
                    <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                        Segera daftarkan dirimu dan jadilah bagian dari perubahan besar di bidang teknologi dan inovasi. Tiket sangat terbatas!
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href={route('seminar.register')}
                            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-bold px-10 py-5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/25 flex items-center justify-center gap-3 text-lg group transform hover:-translate-y-1">
                            Beli Tiket Sekarang
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm font-medium text-slate-400">
                        <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> E-Sertifikat Nasional</div>
                        <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Snack & Lunch Box</div>
                        <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Doorprize Menarik</div>
                    </div>
                </motion.div>
            </section>

        </Layout>
    );
}