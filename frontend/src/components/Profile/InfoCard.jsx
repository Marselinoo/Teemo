import { Calendar } from "lucide-react";

export default function InfoCard({
  joinedDate = "Januari 2024",
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">
        Informasi
      </h2>

      {/* Divider */}
      <div className="h-px bg-gray-100 my-3" />

      {/* Info List */}
      <div className="space-y-3">
        
        {/* Joined */}
        <div className="flex items-center gap-3">
          <Calendar size={16} className="text-blue-500" />
          <div className="text-sm text-gray-600">
            Bergabung sejak <span className="font-medium text-gray-800">{joinedDate}</span>
          </div>
        </div>

      </div>
    </div>
  );
}