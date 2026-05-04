import StatsCard from "./StatsCard";

export default function StatsSection() {
    //nanti data ini diambil dari API, sekarang masih hardcoded dulu
  const stats = [
    { title: "Kompetisi Diikuti", value: 12 },
    { title: "Kompetisi Dimenangkan", value: 5 },
    { title: "Tim Bergabung", value: 3 },
    { title: "Poin Total", value: 2450 },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-6 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <StatsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}