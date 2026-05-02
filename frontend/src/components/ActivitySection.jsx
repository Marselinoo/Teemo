import ActivityItem from "./ActivityItem";

function ActivitySection() {
  const activities = [
    {
      title: "Proposal Web Design Submit",
      subtitle: "TechFest 2024 • 2 jam yang lalu",
      status: "Menunggu Review",
      statusColor: "bg-yellow-400 text-white",
    },
    {
      title: "Sertifikat Baru Ditambahkan",
      subtitle: "Hackathon Nasional • Kemarin",
      status: "Selesai",
      statusColor: "bg-green-400 text-white",
    },
    {
      title: "Budi mengomentari post Anda",
      subtitle: "Mencari anggota tim • 2 hari yang lalu",
      status: "Notifikasi",
      statusColor: "bg-blue-500 text-white",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-800">
          Aktivitas Terkini
        </h2>
        <button className="text-sm text-blue-500 hover:underline">
          Lihat Semua
        </button>
      </div>

      {/* List */}
      <div className="space-y-3">
        {activities.map((item, index) => (
          <ActivityItem key={index} {...item} />
        ))}
      </div>

    </div>
  );
}

export default ActivitySection;