import StatsCard from "./StatsCard";
import { Trophy, FileText, Star, Users } from "lucide-react";

function StatsSection() {
  const stats = [
    {
      title: "KOMPETISI AKTIF",
      value: 3,
      icon: Trophy,
      color: "text-yellow-500",
    },
    {
      title: "SERTIFIKAT",
      value: 12,
      icon: FileText,
      color: "text-orange-500",
    },
    {
      title: "POIN REPUTASI",
      value: "2,450",
      icon: Star,
      color: "text-yellow-400",
    },
    {
      title: "TIM SAYA",
      value: 2,
      icon: Users,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="-mt-12 px-6 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <StatsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default StatsSection;