import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { Rocket, Moon, Sun, LayoutDashboard, Rss, Trophy, User as UserIcon, LogOut } from "lucide-react";

export default function Navbar() {
    const { isLoggedIn, user, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    if (!isLoggedIn) {
        return null;
    }

    return (
        <nav className="sticky top-4 z-50 glass-card mx-4 rounded-2xl px-6 py-3 mb-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/dashboard" className="text-xl font-black tracking-tighter text-[--primary] flex items-center gap-2">
                    <Rocket className="w-6 h-6" />
                    TEEMO
                </Link>

                <div className="hidden md:flex items-center gap-2">
                    {[
                      { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
                      { to: "/feed", icon: Rss, label: "Feed" },
                      { to: "/competitions", icon: Trophy, label: "Competitions" },
                      { to: `/profile/${user?.id}`, icon: UserIcon, label: "Profile" },
                    ].map((item) => (
                      <Link 
                        key={item.to}
                        to={item.to} 
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-[--muted-foreground] hover:text-[--foreground] hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                      >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button 
                      className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-[--muted-foreground]" 
                      onClick={toggleTheme} 
                      aria-label="Toggle theme"
                    >
                        {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    </button>
                    
                    <div className="h-6 w-px bg-[--border] mx-2"></div>

                    <div className="flex items-center gap-3">
                        <div className="text-right hidden sm:block">
                            <p className="text-xs font-bold text-black leading-none mb-1">{user?.name}</p>
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Competitor</p>
                        </div>
                        <button onClick={handleLogout} className="p-2 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors" title="Logout">
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

