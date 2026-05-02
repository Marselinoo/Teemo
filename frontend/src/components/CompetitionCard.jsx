function CompetitionCard({
  title,
  category,
  deadline,
  status,
  statusColor = "bg-blue-100 text-blue-600",
}) {
  return (
    <div className="border rounded-xl p-4 hover:shadow-md transition cursor-pointer">
      
      {/* Title */}
      <h3 className="font-semibold text-gray-800">
        {title}
      </h3>

      {/* Category */}
      <p className="text-sm text-gray-500 mt-1">
        {category}
      </p>

      {/* Deadline */}
      <p className="text-xs text-gray-400 mt-1">
        {deadline}
      </p>

      {/* Status Badge */}
      <div className="mt-3">
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor}`}
        >
          {status}
        </span>
      </div>

    </div>
  );
}

export default CompetitionCard;