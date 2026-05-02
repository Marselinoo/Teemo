function ActivityItem({ title, subtitle, status, statusColor }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 transition">
      
      {/* Left Content */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800">
          {title}
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          {subtitle}
        </p>
      </div>

      {/* Status Badge */}
      <span
        className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor}`}
      >
        {status}
      </span>

    </div>
  );
}

export default ActivityItem;