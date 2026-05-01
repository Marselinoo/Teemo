import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { 
  Image, 
  Video, 
  FileText, 
  MoreHorizontal, 
  ThumbsUp, 
  MessageCircle, 
  Share2,
  Send
} from "lucide-react";

export default function Feed() {
    const { user } = useAuth();
    const [posts] = useState([
        {
            id: 1,
            author: "Ahmad Riyadi",
            role: "UI/UX Designer at TechCorp",
            avatar: "👨",
            content: "Saya baru saja memenangkan kompetisi web design! Terima kasih kepada tim saya atas kerja keras ini.",
            likes: 234,
            comments: 45,
            timestamp: "2 jam yang lalu"
        },
        {
            id: 2,
            author: "Siti Nurhaliza",
            role: "Frontend Developer at StartupX",
            avatar: "👩",
            content: "Mencari anggota tim untuk mengikuti hackathon bulan depan. Skill: React, Node.js, MongoDB. Hubungi saya!",
            timestamp: "4 jam yang lalu",
            likes: 128,
            comments: 32,
        },
        {
            id: 3,
            author: "Budi Santoso",
            role: "Data Scientist at Analytics Co",
            avatar: "👨",
            content: "Kompetisi machine learning yang luar biasa! Datanya menantang dan komunitas sangat supportif.",
            timestamp: "6 jam yang lalu",
            likes: 456,
            comments: 78,
        },
    ]);

    return (
        <div className="max-w-2xl mx-auto px-4 pb-20 space-y-8">
            {/* Create Post */}
            <div className="glass-card p-6 rounded-3xl space-y-6">
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl">
                        {user?.avatar || "👤"}
                    </div>
                    <input 
                      type="text" 
                      placeholder="Bagikan sesuatu dengan jaringan Anda..." 
                      className="flex-1 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-3 text-sm focus:ring-2 focus:ring-[--primary] transition-all"
                    />
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-black text-xs font-bold transition-all">
                            <Image className="w-4 h-4 text-blue-500" />
                            Foto
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-black text-xs font-bold transition-all">
                            <Video className="w-4 h-4 text-rose-500" />
                            Video
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-black text-xs font-bold transition-all">
                            <FileText className="w-4 h-4 text-emerald-500" />
                            Artikel
                        </button>
                    </div>
                    <button className="btn-primary py-2 px-6 text-xs">
                        Post
                    </button>
                </div>
            </div>

            {/* Feed List */}
            <div className="space-y-6">
                {posts.map((post) => (
                    <article key={post.id} className="glass-card p-8 rounded-[2.5rem] space-y-6 group">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xl shadow-lg shadow-purple-500/20">
                                    {post.avatar}
                                </div>
                                <div>
                                    <h4 className="font-black text-black leading-tight">{post.author}</h4>
                                    <p className="text-xs text-black font-medium">{post.role}</p>
                                    <p className="text-[10px] text-black font-bold uppercase tracking-widest mt-1">{post.timestamp}</p>
                                </div>
                            </div>
                            <button className="p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-black transition-colors">
                                <MoreHorizontal className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            {post.content}
                        </div>

                        <div className="flex items-center gap-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                            <button className="flex items-center gap-2 text-black hover:text-[--primary] transition-colors group/btn">
                                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 group-hover/btn:bg-purple-50 dark:group-hover/btn:bg-purple-900/20">
                                    <ThumbsUp className="w-4 h-4" />
                                </div>
                                <span className="text-xs font-bold">{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-2 text-black hover:text-blue-500 transition-colors group/btn">
                                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 group-hover/btn:bg-blue-50 dark:group-hover/btn:bg-blue-900/20">
                                    <MessageCircle className="w-4 h-4" />
                                </div>
                                <span className="text-xs font-bold">{post.comments}</span>
                            </button>
                            <button className="flex items-center gap-2 text-black hover:text-emerald-500 transition-colors group/btn ml-auto">
                                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 group-hover/btn:bg-emerald-50 dark:group-hover/btn:bg-emerald-900/20">
                                    <Share2 className="w-4 h-4" />
                                </div>
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

