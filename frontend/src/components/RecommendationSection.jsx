import CompetitionCard from "./CompetitionCard";

function RecommendationSection() {
  const competitions = [
    {
        title: "AI Innovation Challenge 2024",
        category: "Teknologi • Online",
        deadline: "Deadline: 30 Desember 2024",
        status: "Sedang Berlangsung",
    },
    {
        title: "UX Design Sprint Competition",
        category: "Design • Hybrid",
        deadline: "Deadline: 15 Januari 2025",
        status: "Segera Berakhir",
    },
    {
        title: "National Business Plan Competition",
        category: "Bisnis • Offline",
        deadline: "Deadline: 20 Januari 2025",
        status: "Sedang Berlangsung",
    },
    {
        title: "Hackathon Merdeka 2025",
        category: "Teknologi • Offline",
        deadline: "Deadline: 5 Februari 2025",
        status: "Akan Datang",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-800">
          Rekomendasi Kompetisi
        </h2>
        <button className="text-sm text-blue-500 hover:underline">
          Lihat Semua
        </button>
      </div>

      {/* List rekomendasi section akan dislice jadi 3 index utk demo awal */}
      <div className="space-y-4">
        {competitions.slice(0, 3).map((item, index) => (
          <CompetitionCard key={index} {...item} />
        ))}
      </div>

    </div>
  );
}

export default RecommendationSection;