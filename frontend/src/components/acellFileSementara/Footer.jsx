import { Link } from "react-router-dom";
import { Rocket, Github, Twitter, Linkedin, Instagram, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6 col-span-1 lg:col-span-1">
                        <Link to="/" className="text-2xl font-black tracking-tighter text-[--primary] flex items-center gap-2">
                            <Rocket className="w-8 h-8" />
                            TEEMO
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                            Temukan kompetisi, bangun tim impian, dan tunjukkan prestasimu di jaringan profesional paling modern.
                        </p>
                    </div>
                    
                    {[
                      {
                        title: "Platform",
                        links: [
                          { to: "/dashboard", label: "Dashboard" },
                          { to: "/feed", label: "Feed" },
                          { to: "/competitions", label: "Kompetisi" },
                          { to: "/create-team", label: "Buat Tim" },
                        ]
                      },
                      {
                        title: "Bantuan",
                        links: [
                          { to: "#", label: "FAQ" },
                          { to: "#", label: "Panduan Pengguna" },
                          { to: "#", label: "Hubungi Kami" },
                        ]
                      },
                      {
                        title: "Legal",
                        links: [
                          { to: "#", label: "Syarat & Ketentuan" },
                          { to: "#", label: "Kebijakan Privasi" },
                        ]
                      }
                    ].map((section) => (
                      <div key={section.title} className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-widest text-black">{section.title}</h4>
                        <ul className="space-y-4">
                          {section.links.map((link) => (
                            <li key={link.label}>
                              <Link to={link.to} className="text-sm text-slate-500 hover:text-[--primary] transition-colors">{link.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                        <span>&copy; {new Date().getFullYear()} TEEMO. Made with</span>
                        <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                        <span>All rights reserved.</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        {[
                          { icon: Twitter, label: "Twitter" },
                          { icon: Linkedin, label: "LinkedIn" },
                          { icon: Instagram, label: "Instagram" },
                          { icon: Github, label: "GitHub" },
                        ].map((social) => (
                          <a 
                            key={social.label}
                            href="#" 
                            className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-[--primary] hover:bg-slate-100 transition-all"
                            aria-label={social.label}
                          >
                            <social.icon className="w-5 h-5" />
                          </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

