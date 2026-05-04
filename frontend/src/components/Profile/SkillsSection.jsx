// import SkillBadge from "./SkillBadge";

export default function SkillsSection({
  skills = [
    "React",
    "Node.js",
    "TypeScript",
    "UI/UX Design",
    "Figma",
    "MongoDB",
    "Tailwind CSS",
    "Express.js",
  ],
}) {
    //skill nanti diambil dari API, sekarang masih hardcoded dulu pakai default props
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">
        Keahlian
      </h2>

      {/* Divider */}
      <div className="h-px bg-gray-100 my-3" />

      {/* Skills List */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
            <span
            className="
                inline-flex items-center
                px-3 py-1.5
                text-xs font-semibold
                text-blue-600
                bg-blue-50
                border border-blue-100
                rounded-full
                transition
                hover:bg-blue-100
            "
            >
            {skill}
            </span>
        ))}
      </div>
    </div>
  );
}