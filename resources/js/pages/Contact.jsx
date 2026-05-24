import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '../Components/Layout';

const contacts = [
    { role: 'Ketua Pelaksana', name: 'Hafizh Abdoel Ghofar', whatsapp: '6281234567890', instagram: '@hfizh626', emoji: '👤' },
    { role: 'Koordinator Seminar', name: 'Nama Koordinator', whatsapp: '6281234567891', instagram: '@nama_koor_seminar', emoji: '🎤' },
    { role: 'Koordinator Lomba', name: 'Nama Koordinator', whatsapp: '6281234567892', instagram: '@nama_koor_lomba', emoji: '🏆' },
];

const socialLinks = [
    {
        label: 'Instagram',
        handle: '@eea_unila',
        url: 'https://instagram.com/eea_unila',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
        ),
    },
    {
        label: 'Email',
        handle: 'eea@himatera.unila.ac.id',
        url: 'mailto:eea@himatera.unila.ac.id',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
        ),
    },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // TODO: ganti dengan axios.post('/contact', form)
        setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000);
    };

    return (
        <Layout>
            <Head title="Kontak — EEA 2026" />

            {/* Hero */}
            <section className="py-24 px-6 text-center bg-white">
                <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Hubungi Kami</span>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-3 mb-4">
                    Ada <span className="text-yellow-500">Pertanyaan?</span>
                </h1>
                <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
                    Jangan ragu untuk menghubungi panitia EEA 2026. Kami siap membantu!
                </p>
            </section>

            {/* Kontak Panitia */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Panitia</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Kontak Langsung</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contacts.map((c, i) => (
                            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-yellow-200 transition duration-300 text-center">
                                <div className="text-4xl mb-3">{c.emoji}</div>
                                <p className="text-xs font-semibold text-yellow-500 uppercase tracking-wider mb-1">{c.role}</p>
                                <p className="font-bold text-gray-900 mb-4">{c.name}</p>
                                <div className="flex justify-center gap-3 flex-wrap">
                                    <a href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                        WhatsApp
                                    </a>
                                    <a href={`https://instagram.com/${c.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-sm text-pink-500 hover:text-pink-600 font-medium">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                        {c.instagram}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form + Info */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Kolom Kiri: Sosmed + Lokasi */}
                    <div className="space-y-10">
                        <div>
                            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Sosial Media</span>
                            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4">Ikuti Kami</h2>
                            <div className="flex flex-col gap-3">
                                {socialLinks.map((s, i) => (
                                    <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-5 py-3.5 shadow-sm hover:shadow-md hover:border-yellow-200 hover:-translate-y-0.5 transition-all text-gray-700 hover:text-yellow-600">
                                        <span className="text-yellow-500">{s.icon}</span>
                                        <span className="text-sm font-semibold text-gray-400 w-20 shrink-0">{s.label}</span>
                                        <span className="truncate font-medium">{s.handle}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Lokasi</span>
                            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4">Tempat Kegiatan</h2>
                            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">
                                <div className="flex items-start gap-3 mb-4">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-gray-900">Universitas Lampung</p>
                                        <p className="text-sm text-gray-500 mt-0.5">
                                            Jl. Prof. Dr. Soemantri Brojonegoro No.1,<br />
                                            Gedong Meneng, Kec. Rajabasa,<br />
                                            Bandar Lampung, Lampung 35145
                                        </p>
                                    </div>
                                </div>
                                <div className="rounded-xl overflow-hidden border border-gray-100">
                                    <iframe
                                        title="Lokasi UNILA"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.0!2d105.2422!3d-5.3664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db5a09b4d3b7%3A0x8c63b7b4b1a1a1a1!2sUniversitas%20Lampung!5e0!3m2!1sid!2sid!4v1"
                                        width="100%" height="200" style={{ border: 0 }}
                                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Kolom Kanan: Form */}
                    <div>
                        <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Pesan</span>
                        <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-6">Kirim Pesan</h2>

                        {submitted ? (
                            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
                                <div className="text-5xl mb-4">✅</div>
                                <h3 className="text-xl font-bold text-yellow-600 mb-2">Pesan Terkirim!</h3>
                                <p className="text-gray-500">Terima kasih sudah menghubungi kami. Panitia akan membalas pesan kamu segera.</p>
                                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                                    className="mt-6 text-sm font-semibold text-yellow-600 underline underline-offset-2 hover:text-yellow-700">
                                    Kirim pesan lain
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nama Lengkap <span className="text-yellow-500">*</span></label>
                                    <input type="text" name="name" value={form.name} onChange={handleChange} required
                                        placeholder="Masukkan nama lengkap"
                                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email <span className="text-yellow-500">*</span></label>
                                    <input type="email" name="email" value={form.email} onChange={handleChange} required
                                        placeholder="contoh@email.com"
                                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subjek <span className="text-yellow-500">*</span></label>
                                    <select name="subject" value={form.subject} onChange={handleChange} required
                                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition appearance-none">
                                        <option value="" disabled>Pilih subjek pesan</option>
                                        <option value="seminar">Pertanyaan Seminar</option>
                                        <option value="competition">Pertanyaan Lomba</option>
                                        <option value="sponsorship">Sponsorship / Kerjasama</option>
                                        <option value="other">Lainnya</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Pesan <span className="text-yellow-500">*</span></label>
                                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                                        placeholder="Tulis pesanmu di sini..."
                                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition resize-none" />
                                </div>
                                <button type="submit" disabled={loading}
                                    className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-200 text-gray-900 font-bold py-3.5 px-6 rounded-full transition duration-300 flex items-center justify-center gap-2">
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                                            </svg>
                                            Mengirim...
                                        </>
                                    ) : (
                                        <>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                                            </svg>
                                            Kirim Pesan
                                        </>
                                    )}
                                </button>
                                <p className="text-xs text-gray-400 text-center">
                                    Atau langsung hubungi kami via WhatsApp untuk respons lebih cepat.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>

        </Layout>
    );
}