import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Trophy, 
  Users, 
  Calendar, 
  CheckCircle2, 
  ArrowLeft, 
  Share2, 
  Bookmark, 
  Clock, 
  Target,
  Rocket,
  User,
  X,
  ChevronRight
} from "lucide-react";

export default function CompetitionDetail() {
    const { id } = useParams(); 
    const [showJoinModal, setShowJoinModal] = useState(false);

    const competition = {
        id,
        title: "AI Innovation Summit 2026",
        category: "Artificial Intelligence",
        image: "🤖",
        prize: "Rp 500.000.000",
        participants: 4520,
        deadline: "15 Mei 2026",
        startDate: "1 Juni 2026",
        description: "Kompetisi inovasi AI terbesar dengan hadiah total 500 juta rupiah. Tunjukkan kemampuan Anda dalam mengembangkan solusi AI yang revolusioner dan mengubah industri.",
        requirements: ["Berusia minimal 18 tahun", "Memiliki pengetahuan dasar Machine Learning", "Bersedia menggunakan platform kami", "Untuk tim: maksimal 5 anggota per tim"],
        timeline: [
            { date: "1 April 2026", event: "Pembukaan Pendaftaran" },
            { date: "15 Mei 2026", event: "Deadline Pendaftaran" },
            { date: "1 Juni 2026", event: "Kompetisi Dimulai" },
            { date: "15 Juli 2026", event: "Pengumuman Pemenang" },
        ],
        prizes: [
            { rank: "🥇 Juara 1", amount: "Rp 300.000.000" },
            { rank: "🥈 Juara 2", amount: "Rp 150.000.000" },
            { rank: "🥉 Juara 3", amount: "Rp 50.000.000" },
        ],
    };

    const handleJoin = (type) => {
        if (type === "individual") {
            alert("Anda berhasil mendaftar sebagai peserta individual!");
        }
        setShowJoinModal(false);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 space-y-12">
            {/* Breadcrumbs / Back */}
            <Link to="/competitions" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[--primary] transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Kembali ke Kompetisi
            </Link>

            {/* Hero Section */}
            <div className="glass-card rounded-[3rem] overflow-hidden">
                <div className="grid lg:grid-cols-2">
                    <div className="p-12 space-y-8">
                        <div className="space-y-4">
                            <span className="px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs font-black uppercase tracking-widest border border-purple-100 dark:border-purple-800">
                                {competition.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black text-black leading-tight">
                                {competition.title}
                            </h1>
                            <p className="text-lg text-slate-500 leading-relaxed">
                                {competition.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Hadiah</p>
                                <p className="text-xl font-black text-black">{competition.prize}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Deadline</p>
                                <p className="text-xl font-black text-black">{competition.deadline}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Peserta</p>
                                <p className="text-xl font-black text-black">{competition.participants.toLocaleString("id-ID")}</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-6">
                            <button 
                                className="btn-primary py-4 px-10 text-base shadow-xl"
                                onClick={() => setShowJoinModal(true)}
                            >
                                ✓ Ikuti Kompetisi
                            </button>
                            <button className="btn-secondary p-4 rounded-2xl">
                                <Bookmark className="w-6 h-6" />
                            </button>
                            <button className="btn-secondary p-4 rounded-2xl">
                                <Share2 className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[400px] bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[12rem] select-none overflow-hidden">
                        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
                        <div className="relative animate-float">{competition.image}</div>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                    {/* Timeline */}
                    <section className="space-y-8">
                        <h2 className="text-2xl font-extrabold flex items-center gap-3">
                            <Calendar className="w-6 h-6 text-blue-500" />
                            Timeline Kompetisi
                        </h2>
                        <div className="relative space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100 dark:before:bg-slate-800">
                            {competition.timeline.map((item, idx) => (
                                <div key={idx} className="relative pl-12">
                                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-white dark:border-slate-900 bg-[--primary] shadow-sm"></div>
                                    <div className="glass-card p-6 rounded-2xl">
                                        <p className="text-xs font-black uppercase tracking-widest text-[--primary] mb-1">{item.date}</p>
                                        <p className="font-bold text-black">{item.event}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Requirements & Rules */}
                    <section className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-extrabold flex items-center gap-3">
                                <Target className="w-6 h-6 text-rose-500" />
                                Persyaratan
                            </h2>
                            <ul className="space-y-4">
                                {competition.requirements.map((req, idx) => (
                                    <li key={idx} className="flex gap-4 items-start text-slate-600 dark:text-slate-400">
                                        <div className="p-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 mt-1">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm font-medium">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-2xl font-extrabold flex items-center gap-3">
                                <Trophy className="w-6 h-6 text-amber-500" />
                                Hadiah Utama
                            </h2>
                            <div className="space-y-4">
                                {competition.prizes.map((prize, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-6 glass-card rounded-2xl">
                                        <span className="font-bold text-black">{prize.rank}</span>
                                        <span className="font-black text-[--primary]">{prize.amount}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                {/* Sidebar Info */}
                <aside className="space-y-8">
                    <div className="glass-card p-8 rounded-[2.5rem] space-y-8">
                        <h3 className="text-xl font-bold">Informasi Penyelenggara</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-[--primary] flex items-center justify-center text-white font-black text-xl">
                                    T
                                </div>
                                <div>
                                    <p className="font-bold">TEEMO Team</p>
                                    <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">Verified Organizer</p>
                                </div>
                            </div>
                            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500 font-medium">Mulai</span>
                                    <span className="font-bold">{competition.startDate}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500 font-medium">Kategori</span>
                                    <span className="font-bold">{competition.category}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500 font-medium">Difficulty</span>
                                    <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest">Advanced</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            {/* Join Modal */}
            {showJoinModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setShowJoinModal(false)}></div>
                    <div className="relative glass-card w-full max-w-2xl rounded-[3rem] p-12 overflow-hidden">
                        <button 
                            className="absolute top-8 right-8 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400"
                            onClick={() => setShowJoinModal(false)}
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-black">Pilih Cara Bergabung</h2>
                                <p className="text-slate-500 font-medium">Tentukan bagaimana Anda ingin berkompetisi di event ini.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <button 
                                    className="p-8 rounded-[2rem] border-2 border-slate-100 dark:border-slate-800 hover:border-[--primary] transition-all text-left space-y-6 group"
                                    onClick={() => handleJoin("individual")}
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <User className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold">Individual</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">Berkompetisi sendiri dan buktikan kemampuan terbaik Anda.</p>
                                    </div>
                                    <div className="flex items-center text-xs font-black uppercase tracking-widest text-[--primary]">
                                        Daftar Sekarang <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </button>

                                <Link 
                                    to="/create-team" 
                                    className="p-8 rounded-[2rem] border-2 border-slate-100 dark:border-slate-800 hover:border-blue-500 transition-all text-left space-y-6 group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold">Bersama Tim</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">Bentuk atau cari tim untuk berkolaborasi meraih kemenangan.</p>
                                    </div>
                                    <div className="flex items-center text-xs font-black uppercase tracking-widest text-blue-500">
                                        Cari/Buat Tim <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

