export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition">
      
      {/* Value */}
      <h2 className="text-3xl font-bold text-blue-500">
        {value}
      </h2>

      {/* Title */}
      <p className="text-sm text-gray-500 mt-2">
        {title}
      </p>
    </div>
  );
}