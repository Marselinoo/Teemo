import { Calendar } from "lucide-react";

export default function CertificateCard({
  title,
  organizer,
  date,
  achievement,
  category,
  type = "competition", // competition | workshop | seminar | others
  certificateUrl,
  onOpen
}) {
  // Icon berdasarkan type
  const iconMap = {
    competition: "🏆",
    workshop: "🎓",
    seminar: "📜",
    sports: "🏅",
    default: "📄",
  };

  const icon = iconMap[type] || iconMap.default;

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center">
      
      {/* Icon */}
      <div className="text-5xl mb-4">{icon}</div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-blue-900">
        {title} {/* judul sertifikat, bisa diisi dengan nama kompetisi atau workshopnya */}
      </h3>

      {/* Organizer */}
      <p className="text-xs text-gray-500 mt-1 font-medium">
        {organizer} {/* penyelenggara, bisa diisi dengan nama kompetisi atau workshopnya */}  
      </p>

      {/* Date */}
      <div className="flex items-center justify-center gap-1 text-xs text-gray-400 mt-2">
        <Calendar size={12} />
        {date} {/* tanggal, bisa diisi dengan tanggal kompetisi atau workshopnya */}
      </div>

      {/* Achievement */}
      <p className="text-sm text-gray-600 mt-3">
        {achievement} {/* prestasi, bisa diisi dengan posisi yang didapatkan atau status keikutsertaan */}
        {category && (<span className="text-gray-400"> • {category}</span>)} 
        {/* kategori, bisa diisi dengan kategori kompetisi atau workshopnya */}
      </p>

      {/* Button */}
      <button
        onClick={() => onOpen(certificateUrl)}
        className="mt-4 px-4 py-2 text-sm text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl hover:opacity-90 transition"
      >
        Lihat Sertifikat
      </button>
    </div>
  );
}