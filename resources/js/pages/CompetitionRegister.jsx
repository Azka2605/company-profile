import React, { useEffect, useState } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import Layout from '../Components/Layout';
import useMidtrans from '../Hooks/useMidtrans';



export default function CompetitionRegister({ existing, user, competition, snap_token, client_key, snap_url }) {
const [registrationType, setRegistrationType] = useState('individu');

    const { data, setData, post, processing, errors } = useForm({
        competition_type:  competition.slug,
        registration_type: 'individu',
        name:              user?.name || '',
        email:             user?.email || '',
        phone:             '',
        institution:       '',
        team_name:         '',
        members:           [{ name: '', email: '' }],
    });

    // Sync registration_type ke form
    useEffect(() => {
        setData('registration_type', registrationType);
    }, [registrationType]);

    // Load Midtrans + trigger popup
    useMidtrans(snap_token, snap_url, client_key, () => {
        window.location.href = '/dashboard';
    });

    const addMember = () => {
        setData('members', [...data.members, { name: '', email: '' }]);
    };

    const updateMember = (index, field, value) => {
        const updated = [...data.members];
        updated[index][field] = value;
        setData('members', updated);
    };

    const submit = (e) => {
    e.preventDefault();
    post(route('competition.store', competition.slug));
};

    if (existing) {
        return (
            <Layout>
                <Head title="Pendaftaran Kompetisi — EEA 2026" />
                <section className="py-20 px-6 bg-white min-h-screen">
                    <div className="max-w-lg mx-auto text-center">
                        <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Kompetisi</span>
                        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Kamu Sudah Terdaftar!</h1>
                        <p className="text-gray-500 mb-6">Cek status pendaftaran kamu di dashboard.</p>
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
            <Head title={`Daftar ${competition.name} — EEA 2026`} />
            <section className="py-20 px-6 bg-white min-h-screen">
                <div className="max-w-lg mx-auto">
                    <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Kompetisi</span>
                    <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-2">{competition.name}</h1>
                    <p className="text-gray-500 mb-8">Isi formulir pendaftaran di bawah ini.</p>

                    <form onSubmit={submit} className="space-y-5">

                        {/* Tipe Registrasi */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Tipe Pendaftaran</label>
                          <div className="flex gap-3">
    {(competition.registration_type === 'individu'
    ? ['individu']
    : competition.registration_type === 'tim'
    ? ['tim']
    : ['individu', 'tim']
).map(t => (
        <button key={t} type="button"
            onClick={() => setRegistrationType(t)}
            className={`px-5 py-2 rounded-full text-sm font-bold border transition ${
                registrationType === t
                    ? 'bg-yellow-400 border-yellow-400 text-gray-900'
                    : 'bg-white border-gray-200 text-gray-500'
            }`}>
            {t === 'individu' ? '👤 Individu' : '👥 Tim'}
        </button>
    ))}
</div>
                        </div>

                        {/* Nama */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Lengkap</label>
                            <input type="text" value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="Nama lengkap kamu" />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                            <input type="email" value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="email@kamu.com" />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* No HP */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">No. WhatsApp</label>
                            <input type="text" value={data.phone}
                                onChange={e => setData('phone', e.target.value)}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="08xxxxxxxxxx" />
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>

                        {/* Institusi */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Asal Institusi</label>
                            <input type="text" value={data.institution}
                                onChange={e => setData('institution', e.target.value)}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                placeholder="Universitas / Sekolah / Instansi" />
                            {errors.institution && <p className="text-red-500 text-xs mt-1">{errors.institution}</p>}
                        </div>

                        {/* Tim */}
                        {registrationType === 'tim' && (
                            <>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Tim</label>
                                    <input type="text" value={data.team_name}
                                        onChange={e => setData('team_name', e.target.value)}
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        placeholder="Nama tim kamu" />
                                    {errors.team_name && <p className="text-red-500 text-xs mt-1">{errors.team_name}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Anggota Tim</label>
                                    {data.members.map((member, index) => (
                                        <div key={index} className="flex gap-2 mb-2">
                                            <input type="text" value={member.name}
                                                onChange={e => updateMember(index, 'name', e.target.value)}
                                                className="w-1/2 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                                placeholder={`Nama anggota ${index + 1}`} />
                                            <input type="email" value={member.email}
                                                onChange={e => updateMember(index, 'email', e.target.value)}
                                                className="w-1/2 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                                placeholder="Email anggota" />
                                        </div>
                                    ))}
                                    <button type="button" onClick={addMember}
                                        className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold mt-1">
                                        + Tambah Anggota
                                    </button>
                                </div>
                            </>
                        )}

                        <button type="submit" disabled={processing}
                            className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-200 text-gray-900 font-bold py-3.5 rounded-full transition duration-300">
                            {processing ? 'Mendaftarkan...' : 'Daftar Sekarang →'}
                        </button>
                    </form>
                </div>
            </section>
        </Layout>
    );
}