import AchievementCard from "./AchievementCard";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "Kompetitor Baru",
      description: "Ikuti kompetisi pertama Anda",
      unlocked: true,
    },
    {
      title: "Juara",
      description: "Menangkan 5 kompetisi",
      unlocked: true,
    },
    {
      title: "Tim Pemimpin",
      description: "Buat dan pimpin sebuah tim",
      unlocked: true,
    },
    {
      title: "Networking Star",
      description: "Dapatkan 100 followers",
      unlocked: true,
    },
    {
      title: "Master Competitor",
      description: "Ikuti 20 kompetisi",
      unlocked: false,
    },
    {
      title: "Legendary",
      description: "Menangkan 10 kompetisi",
      unlocked: false,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      
      {/* Title */}
      <h2 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
        🏅 Pencapaian
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {achievements.map((item, index) => (
          <AchievementCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}