import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Senior UI/UX Designer",
      company: "TechCorp Indonesia",
      period: "Jan 2023 - Sekarang",
      description:
        "Memimpin tim desain dalam pengembangan produk digital dan meningkatkan user experience.",
    },
    {
      role: "Frontend Developer",
      company: "Startup XYZ",
      period: "2021 - 2023",
      description:
        "Mengembangkan aplikasi web menggunakan React dan meningkatkan performa UI.",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">
        Pengalaman
      </h2>

      {/* Divider */}
      <div className="h-px bg-gray-100 my-3" />

      {/* Timeline List */}
      <div>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}