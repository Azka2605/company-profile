import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ChevronLeft, ChevronRight, Target, Rocket, Calendar, 
    Trophy, Users, ArrowRight, Zap, GraduationCap, Mic
} from 'lucide-react';
import Layout from '../Components/Layout';

const eeaData = [
    { year: '2018', pesertaLomba: '120+', pesertaSeminar: '300+', img: '/images/eea-2018.jpg' },
    { year: '2019', pesertaLomba: '150+', pesertaSeminar: '350+', img: '/images/eea-2019.jpg' },
    { year: '2020', pesertaLomba: '200+', pesertaSeminar: '400+', img: '/images/eea-2020.jpg' },
    { year: '2021', pesertaLomba: '250+', pesertaSeminar: '450+', img: '/images/eea-2021.jpg' },
    { year: '2022', pesertaLomba: '300+', pesertaSeminar: '500+', img: '/images/eea-2022.jpg' },
    { year: '2023', pesertaLomba: '350+', pesertaSeminar: '600+', img: '/images/eea-2023.jpg' },
    { year: '2024', pesertaLomba: '400+', pesertaSeminar: '700+', img: '/images/eea-2024.jpg' },
    { year: '2025', pesertaLomba: '500+', pesertaSeminar: '850+', img: '/images/eea-2025.jpg' },
];

function EEASlider() {
    const [active, setActive] = useState(eeaData.length - 1);
    const [imgErrors, setImgErrors] = useState({});
    
    const prev = () => setActive(i => (i === 0 ? eeaData.length - 1 : i - 1));
    const next = () => setActive(i => (i === eeaData.length - 1 ? 0 : i + 1));
    const item = eeaData[active];

    return (
        <div className="relative w-full max-w-5xl mx-auto">
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden group">
                <div className="flex flex-col md:flex-row min-h-[400px]">
                    <div className="md:w-1/2 relative bg-slate-800 overflow-hidden flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {imgErrors[active] ? (
                                <motion.div 
                                    key={`err-${active}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800 text-slate-400"
                                >
                                    <svg className="w-16 h-16 mb-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="font-semibold text-lg">Dokumentasi EEA {item.year}</span>
                                </motion.div>
                            ) : (
                                <motion.img 
                                    key={`img-${active}`}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    src={item.img} 
                                    alt={`EEA ${item.year}`}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    onError={() => setImgErrors(prev => ({ ...prev, [active]: true }))} 
                                />
                            )}
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent md:hidden"></div>
                    </div>
                    
                    <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-white relative z-10">
                        <motion.div 
                            key={`text-${active}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 font-bold text-2xl md:text-3xl px-6 py-2 rounded-full mb-8 shadow-sm">
                                <Zap className="w-6 h-6" /> EEA {item.year}
                            </div>
                            
                            <div className="grid grid-cols-2 gap-6 mb-10">
                                <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 hover:shadow-md transition-shadow">
                                    <Trophy className="w-6 h-6 text-yellow-500 mx-auto mb-3" />
                                    <p className="text-3xl font-extrabold text-slate-900 mb-1">{item.pesertaLomba}</p>
                                    <p className="text-slate-500 text-sm font-medium">Peserta Lomba</p>
                                </div>
                                <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 hover:shadow-md transition-shadow">
                                    <Users className="w-6 h-6 text-yellow-500 mx-auto mb-3" />
                                    <p className="text-3xl font-extrabold text-slate-900 mb-1">{item.pesertaSeminar}</p>
                                    <p className="text-slate-500 text-sm font-medium">Peserta Seminar</p>
                                </div>
                            </div>
                        </motion.div>
                        
                        <div className="flex items-center gap-6 mt-auto">
                            <button onClick={prev} className="w-12 h-12 rounded-full bg-slate-100 text-slate-600 hover:bg-yellow-400 hover:text-slate-900 transition-colors flex items-center justify-center">
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <span className="text-slate-400 font-medium font-mono tracking-widest">{String(active + 1).padStart(2, '0')} / {String(eeaData.length).padStart(2, '0')}</span>
                            <button onClick={next} className="w-12 h-12 rounded-full bg-slate-100 text-slate-600 hover:bg-yellow-400 hover:text-slate-900 transition-colors flex items-center justify-center">
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Home({ competitions = [], timelines = [], seminar }) {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    return (
        <Layout>
            {/* Hero Section - Premium Dark Mode */}
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 bg-slate-950 overflow-hidden">
                {/* Dynamic Backgrounds */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-yellow-500/20 blur-[120px] mix-blend-screen"></div>
                    <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen"></div>
                    
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8 relative group"
                    >
                        <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
                        <img src="/images/logo-eea.png" alt="EEA 2026" className="w-48 md:w-64 drop-shadow-2xl relative z-10" onError={(e) => { e.target.style.display = 'none'; }} />
                    </motion.div>

                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-slate-800/50 text-yellow-400 text-xs font-bold px-5 py-2 rounded-full border border-slate-700/50 mb-6 tracking-widest uppercase backdrop-blur-md"
                    >
                        <Zap className="w-4 h-4" /> Electrical Engineering in Action
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-6xl md:text-8xl font-extrabold text-white mb-6 tracking-tight leading-tight"
                    >
                        EEA{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200" style={{ textShadow: '0 0 40px rgba(250,204,21,0.2)' }}>
                            2026
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
                    >
                        Program kerja terbesar Himpunan Mahasiswa Teknik Elektro UNILA yang menghadirkan Seminar Nasional dan berbagai Kompetisi Teknologi bergengsi.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
                    >
                        <Link href="/seminar" className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:-translate-y-1 flex items-center justify-center gap-2">
                            <Mic className="w-5 h-5" />
                            Daftar Seminar
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/competition" className="group px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-bold rounded-full border border-slate-700 transition-all duration-300 hover:border-slate-500 backdrop-blur-sm flex items-center justify-center gap-2">
                            <Trophy className="w-5 h-5" />
                            Lihat Kompetisi
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Stats / About Section */}
            <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-100 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
                
                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div 
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest bg-yellow-50 px-4 py-2 rounded-full border border-yellow-100">Tentang EEA</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6 tracking-tight mb-6">Apa itu EEA 2026?</h2>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Electrical Engineering in Action (EEA) adalah platform inovasi tahunan yang mempertemukan mahasiswa berbakat dari seluruh Indonesia untuk berkompetisi, belajar, dan berkolaborasi dalam memajukan teknologi.
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {[
                            { num: competitions?.length || 4, label: 'Kategori Kompetisi', icon: Trophy, color: 'text-blue-500', bg: 'bg-blue-50' },
                            { num: '1', label: 'Seminar Nasional', icon: Mic, color: 'text-rose-500', bg: 'bg-rose-50' },
                            { num: '1000+', label: 'Partisipan Tahunan', icon: Users, color: 'text-emerald-500', bg: 'bg-emerald-50' },
                        ].map((s, i) => (
                            <motion.div key={i} variants={fadeIn} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-center">
                                <div className={`w-16 h-16 rounded-2xl ${s.bg} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <s.icon className={`w-8 h-8 ${s.color}`} />
                                </div>
                                <p className="text-5xl font-extrabold text-slate-900 mb-2">{s.num}</p>
                                <p className="text-slate-500 font-medium">{s.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 px-6 bg-white relative">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                    >
                        <div>
                            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">Timeline Acara</span>
                            <h2 className="text-4xl font-bold text-slate-900 mt-2">Agenda Penting</h2>
                        </div>
                        <p className="text-slate-500 max-w-md">Catat tanggalnya dan jangan sampai terlewat rangkaian acara spektakuler EEA 2026.</p>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {(timelines.length > 0 ? timelines : [
                            { date: '15 Agustus 2026', title: 'Open Registration', description: 'Pendaftaran gelombang pertama untuk seluruh lomba.' },
                            { date: '10 September 2026', title: 'Close Registration', description: 'Batas akhir pendaftaran lomba dan seminar.' },
                            { date: '25 September 2026', title: 'Technical Meeting', description: 'Penjelasan teknis dan peraturan perlombaan.' },
                            { date: '10 Oktober 2026', title: 'Main Event', description: 'Pelaksanaan seminar nasional dan final lomba.' }
                        ]).map((item, index) => (
                            <motion.div key={index} variants={fadeIn} className="relative group pl-6 md:pl-0">
                                {/* Mobile line */}
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-100 md:hidden"></div>
                                <div className="absolute left-[-4px] top-6 w-2.5 h-2.5 rounded-full bg-yellow-400 md:hidden"></div>
                                
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 h-full">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-500 mb-6 shadow-sm">
                                        <Calendar className="w-3.5 h-3.5 text-yellow-500" />
                                        {item.date}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Competition Preview */}
            <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                
                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 rounded-full">Kompetisi Utama</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">Tunjukkan Bakatmu</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Beragam kompetisi bergengsi menanti. Jadilah juara dan rebut total hadiah jutaan rupiah!</p>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {(competitions.length > 0 ? competitions : [
                            { name: 'Line Follower', description: 'Adu kecepatan dan ketepatan robot pengikut garis.', icon: <Rocket className="w-8 h-8" /> },
                            { name: 'UI/UX Design', description: 'Rancang antarmuka masa depan yang memukau.', icon: <Target className="w-8 h-8" /> },
                            { name: 'Web Development', description: 'Ciptakan website inovatif penuh fitur.', icon: <Zap className="w-8 h-8" /> },
                            { name: 'Esports', description: 'Turnamen game kompetitif tingkat nasional.', icon: <Trophy className="w-8 h-8" /> }
                        ]).map((item, i) => (
                            <motion.div key={i} variants={fadeIn} className="bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 border border-slate-700 hover:bg-slate-800 hover:border-yellow-500/50 transition-all duration-300 group hover:-translate-y-2 text-center cursor-pointer flex flex-col">
                                <div className="w-16 h-16 mx-auto bg-slate-900 rounded-2xl flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-slate-900 transition-all duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
                                <p className="text-slate-400 text-sm mb-6 flex-grow">{item.description}</p>
                                <Link href={`/competition?type=${item.slug || 'detail'}`} className="inline-flex items-center justify-center gap-2 text-yellow-400 text-sm font-bold group-hover:text-yellow-300">
                                    Lihat Detail <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Visi Misi */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col justify-center">
                            <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest mb-4">Visi & Misi</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Tujuan Besar EEA 2026</h2>
                            <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                Kami berkomitmen untuk menjadi wadah utama bagi mahasiswa Indonesia dalam mengembangkan diri, berinovasi, dan membangun koneksi di era digital.
                            </p>
                        </motion.div>

                        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-6">
                            <motion.div variants={fadeIn} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex gap-6 items-start group hover:shadow-xl transition-all duration-300 hover:border-yellow-200">
                                <div className="w-14 h-14 rounded-2xl bg-yellow-50 text-yellow-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <Target className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Visi</h3>
                                    <p className="text-slate-500">Menjadi pionir wadah pengembangan inovasi dan kreativitas mahasiswa di bidang teknologi secara nasional.</p>
                                </div>
                            </motion.div>
                            
                            <motion.div variants={fadeIn} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex gap-6 items-start group hover:shadow-xl transition-all duration-300 hover:border-blue-200">
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <Rocket className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">Misi</h3>
                                    <ul className="space-y-3 text-slate-500">
                                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Menyelenggarakan kompetisi berstandar tinggi</li>
                                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Memfasilitasi pertukaran ilmu lintas universitas</li>
                                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Mengakselerasi ide teknologi menjadi karya nyata</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Slider Sejarah */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
                        <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest bg-yellow-50 px-4 py-2 rounded-full border border-yellow-100">Jejak Langkah</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6 mb-4">Sejarah Gemilang EEA</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Dari tahun ke tahun, kami terus berkembang dan memberikan dampak yang lebih besar.</p>
                    </motion.div>
                    
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                        <EEASlider />
                    </motion.div>
                </div>
            </section>

        </Layout>
    );
}