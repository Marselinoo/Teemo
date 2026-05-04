export default function ExperienceCard({
  role = "Senior UI/UX Designer",
  company = "TechCorp Indonesia",
  period = "Jan 2023 - Sekarang",
  description = "Memimpin tim desain dalam pengembangan produk digital dan meningkatkan user experience.",
}) {
  return (
    <div className="flex gap-4">
      
      {/* Timeline (dot + line) */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 bg-blue-500 rounded-full" />
        <div className="w-px flex-1 bg-gray-200 mt-1" />
      </div>

      {/* Content */}
      <div className="pb-6">
        {/* Role */}
        <h3 className="text-sm font-semibold text-gray-800">
          {role}
        </h3>

        {/* Company */}
        <p className="text-xs text-blue-500 font-medium mt-1">
          {company}
        </p>

        {/* Period */}
        <p className="text-xs text-gray-400 mt-1">
          {period}
        </p>

        {/* Description */}
        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}