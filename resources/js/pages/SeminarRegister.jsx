import React, { useEffect } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import Layout from '../Components/Layout';
import useMidtrans from '../Hooks/useMidtrans';

export default function SeminarRegister({ existing, user, snap_token, client_key, snap_url }) {
    const { data, setData, post, processing, errors } = useForm({
        name:        user?.name || '',
        email:       user?.email || '',
        phone:       '',
        institution: '',
    });

    useMidtrans(snap_token, snap_url, client_key, () => {
        window.location.href = '/dashboard';
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('seminar.store'));
    };

    if (existing) {
        return (
            <Layout>
                <Head title="Pendaftaran Seminar — EEA 2026" />
                <section className="py-20 px-6 bg-white min-h-screen">
                    <div className="max-w-lg mx-auto text-center">
                        <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Seminar Nasional</span>
                        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Kamu Sudah Terdaftar!</h1>
                        <p className="text-gray-500 mb-6">Cek status pembayaran kamu di dashboard.</p>
                        <a href="/dashboard"
                            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full transition duration-300 inline-block">
                            Ke Dashboard
                        </a>
                    </div>
                </section>
            </Layout>
        );
    }

    return (
        <Layout>
            <Head title="Daftar Seminar — EEA 2026" />
            <section className="py-20 px-6 bg-white min-h-screen">
                <div className="max-w-lg mx-auto">
                    <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Seminar Nasional</span>
                    <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-8">Formulir Pendaftaran</h1>

                    <form onSubmit={submit} className="space-y-5">
                        {/* Nama */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Lengkap</label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="Nama lengkap kamu"
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="email@kamu.com"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* No HP */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">No. WhatsApp</label>
                          <input
                                type="text"
                                value={data.phone}
                                onChange={e => setData('phone', e.target.value)}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="08xxxxxxxxxx"
                             />
                             {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>

                        {/* Institusi */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Asal Institusi</label>
                            <input
                                type="text"
                                value={data.institution}
                                onChange={e => setData('institution', e.target.value)}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="Universitas / Sekolah / Instansi"
                            />
                            {errors.institution && <p className="text-red-500 text-xs mt-1">{errors.institution}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-200 text-gray-900 font-bold py-3.5 rounded-full transition duration-300">
                            {processing ? 'Mendaftarkan...' : 'Daftar Sekarang →'}
                        </button>
                    </form>
                </div>
            </section>
        </Layout>
    );
}