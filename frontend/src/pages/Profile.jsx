import { useState } from "react";
import { useParams } from "react-router-dom";
import { 
  MapPin, 
  Calendar, 
  Award, 
  BookOpen, 
  Users, 
  Briefcase, 
  CheckCircle2, 
  Lock, 
  Edit3,
  ExternalLink,
  ChevronRight,
  User as UserIcon,
  ShieldCheck
} from "lucide-react";

export default function Profile() {
    const { userId } = useParams();
    const [activeTab, setActiveTab] = useState("about");

    const [profile] = useState({
        id: userId,
        name: "Acel A nya Anjay",
        title: "Senior FullStack Developer & UI/UX Designer",
        location: "Yogyakarta, Indonesia",
        bio: "Passionate about creating beautiful and functional user interfaces. Always learning and growing with the community.",
        avatar: "👨",
        coverImage: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop",
        joinDate: "Bergabung sejak Januari 2024",
        followers: 1234,
        following: 567,
        skills: ["React", "JavaScript", "UI/UX Design", "Figma", "CSS", "Node.js", "MongoDB"],
        experience: [
            {
                id: 1,
                company: "TechCorp Indonesia",
                position: "Senior UI/UX Designer",
                duration: "Jan 2023 - Sekarang",
                description: "Memimpin desain produk dan mengembangkan design system untuk aplikasi web dan mobile",
            },
            {
                id: 2,
                company: "StartupX",
                position: "Full Stack Developer",
                duration: "Jun 2021 - Des 2022",
                description: "Mengembangkan aplikasi web full-stack menggunakan React dan Node.js",
            },
        ],
        certificates: [
            {
                id: 1,
                title: "AI Innovation Summit 2026",
                issuer: "TEEMO",
                date: "Juli 2026",
                description: "Pemenang Kategori Best AI Solution",
                badge: "🏆",
            },
            {
                id: 2,
                title: "Web Development Challenge",
                issuer: "TEEMO",
                date: "Juni 2026",
                description: "Runner-up dalam kategori Web Development",
                badge: "🎖️",
            },
            {
                id: 3,
                title: "React Professional",
                issuer: "React Academy",
                date: "Mei 2024",
                description: "Sertifikasi profesional dalam React Development",
                badge: "⚛️",
            },
            {
                id: 4,
                title: "UI/UX Design Bootcamp",
                issuer: "Design Institute",
                date: "Maret 2024",
                description: "Lulus bootcamp intensif 12 minggu tentang UI/UX Design",
                badge: "🎨",
            },
        ],
        achievements: [
            { title: "Kompetitor Baru", description: "Ikuti kompetisi pertama Anda", unlocked: true },
            { title: "Juara", description: "Menangkan 5 kompetisi", unlocked: true },
            { title: "Tim Pemimpin", description: "Buat dan pimpin sebuah tim", unlocked: true },
            { title: "Networking Star", description: "Dapatkan 100 followers", unlocked: true },
            { title: "Master Competitor", description: "Ikuti 20 kompetisi", unlocked: false },
            { title: "Legendary", description: "Menangkan 10 kompetisi", unlocked: false },
        ],
        stats: {
            competitionsJoined: 12,
            competitionsWon: 5,
            teamsJoined: 3,
            teamsCreated: 2,
            totalPoints: 2450,
        },
    });

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 space-y-8">
            {/* Header Card */}
            <div className="glass-card rounded-[3rem] overflow-hidden">
                <div className="h-48 w-full relative">
                    <img 
                        src={profile.coverImage} 
                        alt="Cover" 
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="px-10 pb-10 relative">
                    <div className="flex flex-col md:flex-row items-end gap-6 -mt-16">
                        <div className="w-32 h-32 rounded-[2.5rem] bg-white dark:bg-slate-900 p-2 shadow-2xl">
                            <div className="w-full h-full rounded-[2rem] bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-5xl shadow-inner">
                                {profile.avatar}
                            </div>
                        </div>
                        <div className="flex-1 space-y-2 pb-2">
                            <h1 className="text-4xl font-black text-black flex items-center gap-3">
                                {profile.name}
                                <ShieldCheck className="w-6 h-6 text-blue-500" />
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-black dark:text-black">
                                <span className="flex items-center gap-2">
                                    <Briefcase className="w-4 h-4 text-[--primary]" />
                                    {profile.title}
                                </span>
                                <span className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-rose-500" />
                                    {profile.location}
                                </span>
                            </div>
                        </div>
                        <button className="btn-secondary py-3 px-8 flex items-center gap-2">
                            <Edit3 className="w-4 h-4" />
                            Edit Profil
                        </button>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { label: "Kompetisi", value: profile.stats.competitionsJoined, icon: Award, color: "text-purple-500" },
                    { label: "Kemenangan", value: profile.stats.competitionsWon, icon: CheckCircle2, color: "text-emerald-500" },
                    { label: "Tim Saya", value: profile.stats.teamsJoined, icon: Users, color: "text-blue-500" },
                    { label: "Total Poin", value: profile.stats.totalPoints, icon: ShieldCheck, color: "text-amber-500" },
                ].map((stat, i) => (
                    <div key={i} className="glass-card p-6 rounded-3xl flex items-center gap-6 group hover:-translate-y-1 transition-all">
                        <div className={`w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center ${stat.color}`}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-2xl font-black text-black">{stat.value}</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-black">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Layout */}
            <div className="grid lg:grid-cols-3 gap-12">
                <main className="lg:col-span-2 space-y-12">
                    {/* Tabs */}
                    <div className="flex items-center gap-4 p-2 glass-card rounded-2xl w-fit">
                        {[
                            { id: "about", label: "Tentang", icon: UserIcon },
                            { id: "certificates", label: "Sertifikat", icon: BookOpen },
                            { id: "achievements", label: "Pencapaian", icon: Award },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                                    activeTab === tab.id 
                                    ? "bg-[--primary] text-white shadow-lg shadow-purple-500/20" 
                                    : "text-black hover:text-[--primary] hover:bg-slate-50 dark:hover:bg-slate-800"
                                }`}
                            >
                                <tab.icon className="w-4 h-4" />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-12">
                        {activeTab === "about" && (
                            <>
                                <section className="space-y-6">
                                    <h2 className="text-2xl font-extrabold">Biografi</h2>
                                    <div className="glass-card p-8 rounded-[2rem] text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {profile.bio}
                                    </div>
                                </section>

                                <section className="space-y-6">
                                    <h2 className="text-2xl font-extrabold text-black">Keahlian Utama</h2>
                                    <div className="flex flex-wrap gap-3">
                                        {profile.skills.map((skill, idx) => (
                                            <span key={idx} className="px-6 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-sm font-bold text-slate-600 dark:text-black shadow-sm hover:border-[--primary] transition-colors">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </section>

                                <section className="space-y-6">
                                    <h2 className="text-2xl font-extrabold text-black">Pengalaman Kerja</h2>
                                    <div className="space-y-6">
                                        {profile.experience.map((exp) => (
                                            <div key={exp.id} className="glass-card p-8 rounded-[2.5rem] group hover:border-[--primary]/30 transition-all">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h3 className="text-xl font-bold text-black">{exp.position}</h3>
                                                        <p className="text-[--primary] font-bold text-sm">{exp.company}</p>
                                                    </div>
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-black py-1 px-3 bg-slate-50 dark:bg-slate-800 rounded-full">
                                                        {exp.duration}
                                                    </span>
                                                </div>
                                                <p className="text-black dark:text-black text-sm leading-relaxed">{exp.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </>
                        )}

                        {activeTab === "certificates" && (
                            <section className="space-y-8">
                                <h2 className="text-2xl font-extrabold">Sertifikat & Penghargaan</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {profile.certificates.map((cert) => (
                                        <div key={cert.id} className="glass-card p-8 rounded-[2.5rem] space-y-6 group relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                                <Award className="w-24 h-24 rotate-12" />
                                            </div>
                                            <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-3xl shadow-sm">
                                                {cert.badge}
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-lg font-bold text-black leading-tight group-hover:text-[--primary] transition-colors">{cert.title}</h3>
                                                <p className="text-sm font-bold text-black uppercase tracking-widest">{cert.issuer}</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                                                <span className="text-xs font-bold text-black flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    {cert.date}
                                                </span>
                                                <button className="text-[--primary] hover:underline text-xs font-bold flex items-center gap-1">
                                                    Lihat <ExternalLink className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {activeTab === "achievements" && (
                            <section className="space-y-8">
                                <h2 className="text-2xl font-extrabold text-black">Pencapaian Karier</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {profile.achievements.map((achievement, idx) => (
                                        <div key={idx} className={`glass-card p-8 rounded-[2.5rem] flex gap-6 items-center transition-all ${
                                            achievement.unlocked ? "opacity-100" : "opacity-50 grayscale"
                                        }`}>
                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 ${
                                                achievement.unlocked ? "bg-amber-50 dark:bg-amber-900/20 text-amber-500" : "bg-slate-100 dark:bg-slate-800 text-black"
                                            }`}>
                                                {achievement.unlocked ? <Award /> : <Lock />}
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="font-bold text-black">{achievement.title}</h4>
                                                <p className="text-xs text-black leading-relaxed">{achievement.description}</p>
                                                {achievement.unlocked && (
                                                    <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-emerald-500 mt-2">
                                                        <CheckCircle2 className="w-3 h-3" />
                                                        Terbuka
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </main>

                <aside className="space-y-8">
                    <div className="glass-card p-8 rounded-[2.5rem] space-y-8">
                        <h3 className="text-xl font-bold">Jaringan Saya</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-center space-y-1">
                                <p className="text-2xl font-black text-black">{profile.followers}</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-black">Pengikut</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-center space-y-1">
                                <p className="text-2xl font-black text-black">{profile.following}</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-black">Mengikuti</p>
                            </div>
                        </div>
                        <button className="btn-primary w-full py-3 text-sm">
                            Hubungkan
                        </button>
                    </div>

                    <div className="glass-card p-8 rounded-[2.5rem] space-y-6">
                        <h3 className="text-xl font-bold">Informasi</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-sm text-black">
                                <Calendar className="w-5 h-5 text-blue-500" />
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-black">Terdaftar Sejak</p>
                                    <p className="font-bold text-slate-700 dark:text-slate-300">Januari 2024</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-black">
                                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-black">Status Akun</p>
                                    <p className="font-bold text-slate-700 dark:text-slate-300">Terverifikasi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}

