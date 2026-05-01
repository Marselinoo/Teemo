import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Trophy, Users, Calendar, ArrowRight, Sparkles, Filter } from "lucide-react";

const competitions = [
    {
        id: 1,
        title: "AI Innovation Summit 2026",
        category: "Artificial Intelligence",
        description: "Bangun solusi AI yang membantu tim belajar, berkolaborasi, dan mengambil keputusan dengan lebih cepat.",
        participants: 4520,
        prize: "Rp 500 jt",
        deadline: "15 Mei 2026",
        difficulty: "Advanced",
        status: "Terbuka", 
        color: "violet",
        poster: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600&h=300",
    },
    {
        id: 2,
        title: "Web Development Challenge",
        category: "Web Development",
        description: "Rancang aplikasi web responsif dengan pengalaman pengguna yang rapi dari ide sampai demo final.",
        participants: 3280,
        prize: "Rp 300 jt",
        deadline: "20 Mei 2026",
        difficulty: "Intermediate",
        status: "Terbuka",
        color: "blue",
        poster: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=300",
    },
    {
        id: 3,
        title: "Mobile App Hackathon",
        category: "Mobile Development",
        description: "Buat produk mobile dalam sprint singkat dan presentasikan dampaknya untuk pengguna nyata.",
        participants: 2150,
        prize: "Rp 250 jt",
        deadline: "25 Mei 2026",
        difficulty: "Intermediate",
        status: "Segera Dimulai",
        color: "mint",
        poster: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600&h=300",
    },
    {
        id: 4,
        title: "Design Sprint 2026",
        category: "UI/UX Design",
        description: "Tunjukkan proses desain, validasi, dan prototipe interaktif untuk menyelesaikan problem nyata.",
        participants: 2850,
        prize: "Rp 200 jt",
        deadline: "18 Mei 2026",
        difficulty: "Beginner",
        status: "Terbuka",
        color: "amber",
        poster: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600&h=300",
    },
    {
        id: 5,
        title: "Cybersecurity Challenge",
        category: "Cybersecurity",
        description: "Uji kemampuan analisis keamanan melalui skenario capture the flag dan incident response.",
        participants: 1650,
        prize: "Rp 350 jt",
        deadline: "22 Mei 2026",
        difficulty: "Advanced",
        status: "Terbuka",
        color: "rose",
        poster: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=300",
    },
    {
        id: 6,
        title: "Data Analytics Bootcamp",
        category: "Data Science",
        description: "Ubah dataset kompleks menjadi insight bisnis, visualisasi, dan rekomendasi yang bisa dijalankan.",
        participants: 1920,
        prize: "Rp 280 jt",
        deadline: "28 Mei 2026",
        difficulty: "Intermediate",
        status: "Terbuka",
        color: "teal",
        poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=300",
    },
];

const categories = ["Semua", "Artificial Intelligence", "Web Development", "Mobile Development", "UI/UX Design", "Cybersecurity", "Data Science"];

export default function Competitions() {
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCompetitions = useMemo(() => {
        return competitions.filter((competition) => {
            const search = searchTerm.toLowerCase();
            const matchesCategory = selectedCategory === "Semua" || competition.category === selectedCategory;
            const matchesSearch = competition.title.toLowerCase().includes(search) || competition.description.toLowerCase().includes(search);

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchTerm]);

    return (
        <div className="min-h-screen pb-20 max-w-7xl mx-auto px-4 md:px-8 space-y-16">
            {/* Hero Section */}
            <header className="relative py-16 text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-black uppercase tracking-widest text-black">
                    <Sparkles className="w-3 h-3 text-[--primary]" />
                    TEEMO Competitions
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight max-w-3xl mx-auto leading-[1.1]">
                    Temukan kompetisi yang pas untuk <span className="text-[--primary]">timmu</span>
                </h1>
                <p className="text-black text-lg max-w-2xl mx-auto">
                    Jelajahi tantangan teknologi, desain, data, dan keamanan siber. Filter peluang terbaik lalu bentuk tim yang siap bertanding.
                </p>

                <div className="max-w-2xl mx-auto relative group mt-12">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-black group-focus-within:text-[--primary] transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Cari kompetisi impianmu..." 
                      className="w-full bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl py-6 pl-16 pr-8 text-lg font-medium focus:ring-0 focus:border-[--primary] transition-all shadow-xl shadow-slate-200/50 dark:shadow-none"
                      value={searchTerm} 
                      onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                </div>
            </header>

            {/* Main Content */}
            <main className="space-y-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                        {categories.map((category) => (
                            <button 
                              key={category} 
                              className={`px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                                selectedCategory === category 
                                ? "bg-[--primary] text-white border-[--primary] shadow-lg shadow-purple-500/30" 
                                : "bg-white dark:bg-slate-900 text-black border-slate-100 dark:border-slate-800 hover:border-[--primary] hover:text-[--primary]"
                              }`}
                              onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="text-sm font-bold text-black uppercase tracking-widest flex items-center gap-2">
                        <Filter className="w-4 h-4" />
                        {filteredCompetitions.length} Results
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCompetitions.map((competition) => (
                        <article 
                          key={competition.id} 
                          className="glass-card rounded-[2.5rem] overflow-hidden group hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                  src={competition.poster} 
                                  alt={competition.title} 
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                />
                                <div className="absolute top-4 left-4 flex gap-2">
                                  <span className="px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-[--primary]">
                                    {competition.category}
                                  </span>
                                  <span className={`px-3 py-1.5 rounded-xl backdrop-blur-md text-[10px] font-black uppercase tracking-widest border border-white/20 ${
                                    competition.status === 'Terbuka' ? 'bg-emerald-500/80 text-white' : 'bg-amber-500/80 text-white'
                                  }`}>
                                    {competition.status}
                                  </span>
                                </div>
                            </div>

                            <div className="p-8 space-y-6">
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-black leading-tight group-hover:text-[--primary] transition-colors">{competition.title}</h3>
                                    <p className="text-black text-sm line-clamp-2">{competition.description}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-100 dark:border-slate-800">
                                    <div className="space-y-1">
                                        <p className="text-[10px] uppercase tracking-widest font-bold text-black">Total Prize</p>
                                        <div className="flex items-center gap-2 font-black text-[--primary]">
                                            <Trophy className="w-4 h-4" />
                                            {competition.prize}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] uppercase tracking-widest font-bold text-black">Deadline</p>
                                        <div className="flex items-center gap-2 font-bold text-black">
                                            <Calendar className="w-4 h-4 text-black" />
                                            {competition.deadline}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs font-bold text-black">
                                        <Users className="w-4 h-4" />
                                        {competition.participants.toLocaleString("id-ID")} Participants
                                    </div>
                                    <Link 
                                      to={`/competition/${competition.id}`} 
                                      className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-[--primary] hover:text-white text-black transition-all"
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredCompetitions.length === 0 && (
                    <div className="text-center py-20 glass-card rounded-[3rem]">
                        <Search className="w-16 h-16 text-slate-200 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold">Kompetisi tidak ditemukan</h3>
                        <p className="text-black mt-2">Coba ubah kata kunci atau filter yang sedang dipilih.</p>
                    </div>
                )}
            </main>
        </div>
    );
}

