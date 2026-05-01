import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Eye, EyeOff, Rocket, ArrowLeft, Mail, Lock } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isExiting, setIsExiting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Email dan password tidak boleh kosong");
      return;
    }

    setIsExiting(true);
    setTimeout(() => {
      login({
        id: "1",
        name: email.split("@")[0],
        email,
      });
      navigate("/dashboard");
    }, 350);
  };

  return (
    <main className="min-h-screen bg-[--background] flex items-center justify-center p-6">
      {/* Background blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-400 blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-blue-400 blur-[100px]"></div>
      </div>

      <div className="w-full max-w-5xl glass-card rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
        {/* Brand Side */}
        <div className="md:w-1/2 bg-slate-900 p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 blur-[120px] opacity-20"></div>
          
          <div className="relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-2xl font-black tracking-tighter text-white">
              <Rocket className="w-8 h-8 text-[--primary]" />
              TEEMO
            </Link>
          </div>

          <div className="relative z-10 space-y-6">
            <div className="text-purple-400 font-bold uppercase tracking-widest text-xs">Welcome back</div>
            <h1 className="text-4xl font-extrabold text-white leading-tight">
              Masuk dan lanjutkan perjalanan kompetisimu.
            </h1>
            <p className="text-slate-400">
              Kelola tim, pantau kompetisi, dan lanjutkan progres dari satu dashboard yang rapi.
            </p>
          </div>

          <div className="relative z-10 pt-12">
            <div className="glass-card bg-white/10 border-white/10 p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-white uppercase tracking-widest opacity-60">
                <span>Competition Progress</span>
                <span>72%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[--primary] w-[72%] rounded-full"></div>
              </div>
              <div className="flex gap-8 pt-2">
                <div>
                  <div className="text-xl font-bold text-white">6</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-400">Active Tracks</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">1.9k</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-400">Competitors</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="md:w-1/2 bg-white dark:bg-slate-900 p-12 flex flex-col justify-center">
          <div className="max-w-sm mx-auto w-full space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold">Selamat Datang</h2>
              <p className="text-slate-500 text-sm">Gunakan email dan password apa saja untuk demo.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-500 text-xs font-medium border border-rose-100 dark:border-rose-800">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    placeholder="nama@contoh.com"
                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-[--primary] transition-all"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl py-4 pl-12 pr-12 text-sm focus:ring-2 focus:ring-[--primary] transition-all"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-[--primary] transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button type="submit" className="w-full btn-primary py-4 text-base">
                Masuk ke Dashboard
              </button>
            </form>

            <div className="text-center pt-4">
              <p className="text-sm text-slate-500">
                Belum punya akun? <Link to="/register" className="text-[--primary] font-bold hover:underline">Daftar sekarang</Link>
              </p>
            </div>

            <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-[--primary] transition-colors">
                <ArrowLeft className="w-4 h-4" /> Kembali
              </Link>
              <span className="text-[10px] uppercase tracking-widest font-black text-slate-300 dark:text-slate-700">Demo Mode Active</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

