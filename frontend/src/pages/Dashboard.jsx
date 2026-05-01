import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { 
  Trophy, 
  FileText, 
  Star, 
  Users, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  Timer, 
  Bell 
} from "lucide-react";

export default function Dashboard() {
    const { user } = useAuth();

    return (
        <div className="min-h-screen pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                    Selamat datang kembali, <span className="text-[--primary]">{user?.name || "Pengguna"}</span>! 👋
                </h1>
                <p className="text-black text-lg">Berikut adalah ringkasan progres dan aktivitas Anda hari ini.</p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { icon: Trophy, label: "Kompetisi Aktif", value: "3", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
                    { icon: FileText, label: "Sertifikat", value: "12", color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
                    { icon: Star, label: "Poin Reputasi", value: "2,450", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-900/20" },
                    { icon: Users, label: "Tim Saya", value: "2", color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
                ].map((metric, i) => (
                    <div key={i} className="glass-card p-6 rounded-3xl flex items-center gap-6 group hover:-translate-y-1 transition-all">
                        <div className={`w-14 h-14 rounded-2xl ${metric.bg} flex items-center justify-center ${metric.color}`}>
                            <metric.icon className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-black uppercase tracking-widest">{metric.label}</p>
                            <p className="text-2xl font-black text-black">{metric.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-3 gap-12">
                {/* Recent Activity */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-extrabold">Aktivitas Terkini</h2>
                        <button className="text-sm font-bold text-[--primary] hover:underline">Lihat Semua</button>
                    </div>
                    
                    <div className="space-y-4">
                        {[
                            { 
                              icon: FileText, 
                              title: "Proposal Web Design Submit", 
                              meta: "TechFest 2024 • 2 jam yang lalu", 
                              status: "Menunggu Review",
                              statusType: "pending"
                            },
                            { 
                              icon: Trophy, 
                              title: "Sertifikat Baru Ditambahkan", 
                              meta: "Hackathon Nasional • Kemarin", 
                              status: "Selesai",
                              statusType: "success"
                            },
                            { 
                              icon: Bell, 
                              title: "Budi mengomentari post Anda", 
                              meta: "Mencari anggota tim... • 2 hari yang lalu", 
                              status: "Notifikasi",
                              statusType: "default"
                            },
                        ].map((activity, i) => (
                            <div key={i} className="glass-card p-6 rounded-3xl flex items-center gap-6 group transition-all">
                                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-black">
                                    <activity.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-bold text-black truncate">{activity.title}</p>
                                    <p className="text-xs text-black">{activity.meta}</p>
                                </div>
                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                                  activity.statusType === 'success' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                  activity.statusType === 'pending' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                  'bg-slate-50 text-slate-600 border-slate-100'
                                }`}>
                                  {activity.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recommendations */}
                <div className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-extrabold">Rekomendasi</h2>
                        <Link to="/competitions" className="text-sm font-bold text-[--primary] hover:underline">Eksplorasi</Link>
                    </div>

                    <div className="space-y-6">
                        {[
                            { 
                              title: "AI Innovation Challenge 2024", 
                              desc: "Tantangan membuat solusi AI untuk masalah lingkungan.", 
                              level: "Tingkat Nasional", 
                              deadline: "14 Mei" 
                            },
                            { 
                              title: "UX Design Sprint", 
                              desc: "Rancang antarmuka aplikasi perbankan masa depan.", 
                              level: "Tingkat Internasional", 
                              deadline: "20 Mei" 
                            },
                        ].map((rec, i) => (
                            <div key={i} className="glass-card p-8 rounded-[2rem] space-y-6 group hover:bg-[--primary] hover:text-white transition-all duration-300">
                                <div className="space-y-2">
                                  <h3 className="text-xl font-bold group-hover:text-white transition-colors">{rec.title}</h3>
                                  <p className="text-black text-sm group-hover:text-purple-100 transition-colors">{rec.desc}</p>
                                </div>
                                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 group-hover:border-white/20 pt-6">
                                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black group-hover:text-white/80">
                                    <Clock className="w-4 h-4" />
                                    {rec.deadline}
                                  </div>
                                  <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

