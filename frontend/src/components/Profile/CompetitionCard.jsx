import { Calendar } from "lucide-react";

export default function CompetitionCard({
  title = "AI Innovation Summit",
  description = "Kompetisi inovasi AI tingkat nasional",
  date = "12 Jan 2024",
  status = "Pemenang", // "Peserta" | "Finalis" dll
}) {
  const statusStyle = {
    Pemenang: "bg-green-50 text-green-600 border-green-100",
    Peserta: "bg-gray-100 text-gray-600 border-gray-200",
    Finalis: "bg-yellow-50 text-yellow-600 border-yellow-100",
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition">
      
      <div className="flex items-start justify-between gap-4">
        
        {/* Left Content */}
        <div className="flex-1">
          
          {/* Title */}
          <h3 className="text-sm font-semibold text-gray-800">
            {title}
          </h3>

          {/* Description */}
          <p className="text-xs text-gray-500 mt-1">
            {description}
          </p>

          {/* Date */}
          <div className="flex items-center gap-1 text-xs text-gray-400 mt-2">
            <Calendar size={12} />
            {date}
          </div>
        </div>

        {/* Status Badge */}
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full border
            ${statusStyle[status] || statusStyle["Peserta"]}
          `}
        >
          {status}
        </span>

      </div>
    </div>
  );
}