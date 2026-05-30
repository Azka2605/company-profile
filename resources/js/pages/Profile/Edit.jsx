import Layout from '../../Components/Layout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { motion } from 'framer-motion';
import { User, ShieldCheck, UserX } from 'lucide-react';

export default function Edit({ mustVerifyEmail, status }) {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <Layout>
            <Head title="Profil Akun — EEA 2026" />

            <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-6">
                <div className="mx-auto max-w-4xl space-y-8">
                    
                    {/* Header */}
                    <motion.div 
                        initial="hidden" animate="visible" variants={fadeIn}
                        className="mb-8"
                    >
                        <span className="text-yellow-500 font-bold text-xs uppercase tracking-widest bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100 mb-3 inline-block">Pengaturan Akun</span>
                        <h2 className="text-3xl font-extrabold text-slate-900">
                            Profil Kamu
                        </h2>
                        <p className="text-slate-500 mt-2">Kelola informasi pribadi dan pengaturan keamanan akunmu.</p>
                    </motion.div>

                    {/* Profile Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
                        className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden relative group"
                    >
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-400 to-blue-600"></div>
                        <div className="p-8 sm:p-10 flex flex-col sm:flex-row gap-8">
                            <div className="shrink-0">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center">
                                    <User className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="w-full max-w-xl">
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Password */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden relative group"
                    >
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-emerald-400 to-emerald-600"></div>
                        <div className="p-8 sm:p-10 flex flex-col sm:flex-row gap-8">
                            <div className="shrink-0">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="w-full max-w-xl">
                                <UpdatePasswordForm />
                            </div>
                        </div>
                    </motion.div>

                    {/* Delete Account */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
                        className="bg-slate-900 rounded-[2rem] border border-slate-800 shadow-xl overflow-hidden relative group"
                    >
                        {/* Danger styling */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-500/10 via-transparent to-transparent opacity-50"></div>
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500"></div>
                        
                        <div className="p-8 sm:p-10 flex flex-col sm:flex-row gap-8 relative z-10">
                            <div className="shrink-0">
                                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/30">
                                    <UserX className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="w-full max-w-xl text-slate-300">
                                <DeleteUserForm />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </Layout>
    );
}
