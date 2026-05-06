function StatsCard({ title, value, icon: Icon, color = "text-gray-500" }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition">

      {/* Icon Box */}
      <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center">
        {Icon && <Icon className={`w-5 h-5 ${color}`} />}
      </div>

      {/* Text */}
      <div>
        <p className="text-xs text-gray-500 font-semibold">
          {title}
        </p>
        <h2 className="text-xl font-bold text-gray-800 mt-1">
          {value}
        </h2>
      </div>

    </div>
  );
}

export default StatsCard;