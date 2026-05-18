import React, { useEffect } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
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
    }, []);

    const bayarSekarang = (token) => {
        if (window.snap) {
            window.snap.pay(token, {
                onSuccess: () => { window.location.reload(); },
                onPending: () => { window.location.reload(); },
                onError:   () => { alert('Pembayaran gagal, coba lagi.'); },
            });
        } else {
            alert('Snap belum siap, tunggu sebentar lalu coba lagi.');
        }
    };

    const statusColor = {
        pending:   'text-yellow-600 bg-yellow-50 border-yellow-200',
        paid:      'text-green-600 bg-green-50 border-green-200',
        confirmed: 'text-green-600 bg-green-50 border-green-200',
        failed:    'text-red-600 bg-red-50 border-red-200',
        expired:   'text-gray-600 bg-gray-50 border-gray-200',
        rejected:  'text-red-600 bg-red-50 border-red-200',
    };

    const statusLabel = {
        pending:   '⏳ Menunggu Pembayaran',
        paid:      '✅ Lunas',
        confirmed: '✅ Dikonfirmasi',
        failed:    '❌ Gagal',
        expired:   '⌛ Expired',
        rejected:  '❌ Ditolak',
    };

    return (
        <Layout>
            <Head title="Dashboard — EEA 2026" />

            <section className="py-16 px-6 bg-white min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Portal Peserta</span>
                    <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-1">Halo, {auth.user.name}! 👋</h1>
                    <p className="text-gray-500 mb-10">Berikut status pendaftaran kamu di EEA 2026.</p>

                    {/* Seminar */}
                    <div className="mb-10">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">🎤 Seminar Nasional</h2>
                        {seminar ? (
                            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                                <div className="flex items-center justify-between flex-wrap gap-3">
                                    <div>
                                        <p className="font-semibold text-gray-900">{seminar.name}</p>
                                        <p className="text-sm text-gray-500">{seminar.institution}</p>
                                    </div>
                                    <span className={`text-sm font-bold px-4 py-1.5 rounded-full border ${statusColor[seminar.payment_status]}`}>
                                        {statusLabel[seminar.payment_status]}
                                    </span>
                                </div>
                                {seminar.payment_status === 'pending' && seminar.midtrans_token && (
                                    <button
                                        onClick={() => bayarSekarang(seminar.midtrans_token)}
                                        className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-2.5 rounded-full text-sm transition">
                                        Bayar Sekarang
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
                                <p className="text-gray-500 mb-4">Kamu belum mendaftar seminar.</p>
                                <Link href={route('seminar.register')}
                                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-2.5 rounded-full text-sm transition inline-block">
                                    Daftar Sekarang
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Kompetisi */}
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 mb-4">🏆 Kompetisi</h2>
                        {competitions && competitions.length > 0 ? (
                            <div className="space-y-4">
                                {competitions.map((c, i) => (
                                    <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-center justify-between flex-wrap gap-3">
                                            <div>
                                                <p className="font-semibold text-gray-900">{c.competition_type.replace('_', ' ').toUpperCase()}</p>
                                                <p className="text-sm text-gray-500">{c.registration_type === 'tim' ? `Tim: ${c.team_name}` : 'Individu'}</p>
                                            </div>
                                            <span className={`text-sm font-bold px-4 py-1.5 rounded-full border ${statusColor[c.status]}`}>
                                                {statusLabel[c.status]}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
                                <p className="text-gray-500 mb-4">Kamu belum mendaftar lomba apapun.</p>
                                <Link href="/competition"
                                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-2.5 rounded-full text-sm transition inline-block">
                                    Lihat Lomba
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </Layout>
    );
}