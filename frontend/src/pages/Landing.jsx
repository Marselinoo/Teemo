import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { 
  Trophy, 
  Users, 
  MessageSquare, 
  GraduationCap, 
  BarChart3, 
  Gift, 
  Globe, 
  Briefcase, 
  TrendingUp, 
  Rocket, 
  Target, 
  ArrowRight,
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";

export default function Landing() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen">
      {/* Animated Background Blob */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-400 blur-[120px] animate-float"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-blue-400 blur-[100px] animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass-card mx-4 mt-4 rounded-2xl px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-[--primary] flex items-center gap-2">
            <Rocket className="w-8 h-8" />
            TEEMO
          </div>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-[--muted-foreground]">
            <li><a href="#features" className="hover:text-[--foreground] transition-colors">Features</a></li>
            <li><a href="#competitions" className="hover:text-[--foreground] transition-colors">Kompetisi</a></li>
            <li><a href="#contact" className="hover:text-[--foreground] transition-colors">Kontak</a></li>
          </ul>
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <button className="btn-primary py-2 px-6" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="text-sm font-semibold hover:text-[--primary] transition-colors">Login</Link>
                <Link to="/login" className="btn-primary py-2 px-6">Join Now</Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-widest animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Platform Kompetisi Terpadu
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-black">
            Achieve Together. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Level Up Your Career.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Join a professional network where ambition meets opportunity. Participate in competitions, build teams, showcase your achievements, and grow your career.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {isLoggedIn ? (
              <Link to="/dashboard" className="btn-primary text-base px-10 group">
                Go to Dashboard <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <>
                <Link to="/login" className="btn-primary text-base px-10 group">
                  Mulai Sekarang <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#features" className="btn-secondary text-base px-10">
                  Pelajari Lebih Lanjut
                </a>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 bg-[--muted]" id="features">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-extrabold">Fitur Unggulan</h2>
            <p className="text-black max-w-lg mx-auto">Semua yang Anda butuhkan untuk berkompetisi dan meraih kesuksesan.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Trophy, title: "Kompetisi Beragam", desc: "Akses ratusan kompetisi di berbagai kategori: AI, Web, Mobile, Design, dan banyak lagi.", color: "text-amber-500" },
              { icon: Users, title: "Manajemen Tim", desc: "Buat tim, undang anggota, dan kelola kolaborasi dengan mudah dan efisien.", color: "text-blue-500" },
              { icon: MessageSquare, title: "Komunitas Aktif", desc: "Terhubung dengan kompetitor lain, berbagi pengalaman, dan belajar bersama.", color: "text-purple-500" },
              { icon: GraduationCap, title: "Sertifikasi", desc: "Dapatkan sertifikat resmi dan tingkatkan kredibilitas profesional Anda.", color: "text-emerald-500" },
              { icon: BarChart3, title: "Dashboard Analitik", desc: "Pantau progress, analisis performa, dan identifikasi area peningkatan.", color: "text-rose-500" },
              { icon: Gift, title: "Hadiah & Bonus", desc: "Menangkan hadiah menarik, bonus reputasi, dan kesempatan networking eksklusif.", color: "text-indigo-500" },
            ].map((f, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all group">
                <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform ${f.color}`}>
                  <f.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-black leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 px-6" id="competitions">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Mengapa Harus <br />
              <span className="text-[--primary]">Bergabung di TEEMO?</span>
            </h2>
            <p className="text-lg text-black">
              Dapatkan pengalaman dan manfaat maksimal untuk perkembangan karir Anda di masa depan.
            </p>
            <div className="space-y-6">
              {[
                { icon: Globe, title: "Jangkauan Global", desc: "Kompetisi dengan peserta dari seluruh Indonesia dan dunia." },
                { icon: Briefcase, title: "Peluang Karir", desc: "Tunjukkan kemampuan Anda ke perusahaan top dan dapatkan tawaran kerja." },
                { icon: TrendingUp, title: "Pengembangan Skill", desc: "Tantang diri Anda dengan masalah nyata dan belajar dari yang terbaik." }
              ].map((v, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 text-[--primary]">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{v.title}</h4>
                    <p className="text-black text-sm">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500 to-blue-500 opacity-20 blur-2xl rounded-[3rem]"></div>
            <div className="relative glass-card aspect-square rounded-[3rem] p-12 flex flex-col justify-center gap-8 text-center overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/50"></div>
               <div className="relative z-10 space-y-4">
                  <Target className="w-20 h-20 mx-auto text-purple-600 animate-pulse" />
                  <div className="text-4xl font-black text-black">10k+</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-black">Active Competitors</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-slate-900 text-white p-16 text-center space-y-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 blur-[150px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 blur-[150px] opacity-20"></div>
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-6xl font-extrabold">Siap Menerima Tantangan?</h2>
            <p className="text-black max-w-2xl mx-auto text-lg">
              Bergabunglah dengan ribuan kompetitor dan raih kesuksesan bersama platform kompetisi terdepan.
            </p>
            <div className="pt-8">
              {isLoggedIn ? (
                <Link to="/competitions" className="btn-primary py-4 px-12 text-lg group">
                  🚀 Jelajahi Kompetisi <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <Link to="/login" className="btn-primary py-4 px-12 text-lg group">
                  🎯 Daftar Sekarang <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[--muted] pt-24 pb-12 px-6 border-t border-[--border]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <div className="text-2xl font-black tracking-tighter text-[--primary]">TEEMO</div>
              <p className="text-sm text-black leading-relaxed">
                Platform ekosistem kompetisi terbesar di Indonesia yang menghubungkan talenta terbaik dengan peluang emas.
              </p>
              <div className="flex gap-4">
                {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:bg-[--primary] hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            {[
              { title: "Platform", links: ["Tentang TEEMO", "Kompetisi", "Komunitas", "Blog"] },
              { title: "Bantuan", links: ["FAQ", "Panduan", "Support", "Hubungi Kami"] },
              { title: "Legal", links: ["Kebijakan Privasi", "Syarat & Ketentuan", "Lisensi"] }
            ].map((col, i) => (
              <div key={i} className="space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-black">{col.title}</h4>
                <ul className="space-y-4">
                  {col.links.map((link, j) => (
                    <li key={j}><a href="#" className="text-sm text-black hover:text-[--primary] transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-[--border] flex flex-col md:row items-center justify-between gap-4 text-xs font-medium text-black">
            <p>© 2024 TEEMO. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
