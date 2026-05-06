export default function AchievementCard({
  title,
  description,
  unlocked = false,
}) {
  return (
    <div
      className={`
        rounded-2xl p-6 transition flex flex-col justify-between h-full
        ${
          unlocked
            ? "bg-green-50 border border-green-200 shadow-sm"
            : "bg-gray-100 text-gray-400"
        }
      `}
    >
      {/* TOP */}
      <div className="text-center">
        <div className="text-4xl mb-3">
          {unlocked ? "🏅" : "🔒"}
        </div>

        <h3
          className={`text-sm font-semibold ${
            unlocked ? "text-blue-900" : "text-gray-400"
          }`}
        >
          {title}
        </h3>

        <p className="text-xs mt-2">
          {description}
        </p>
      </div>

      {/* BOTTOM */}
      {unlocked && (
        <div className="mt-4 text-center">
          <div className="inline-block px-3 py-1 text-xs bg-blue-500 text-white rounded-full">
            ✓ Terbuka
          </div>
        </div>
      )}
    </div>
  );
}