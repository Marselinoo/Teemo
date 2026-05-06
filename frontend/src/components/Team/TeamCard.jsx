import { Users, Trophy, Swords } from "lucide-react";

export default function TeamCard({ team }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">{team.name}</h3>

        <div className="flex items-center gap-1 text-sm bg-blue-50 px-2 py-1 rounded">
          <Users size={14} />
          {team.members.length}/{team.maxMembers}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500">{team.description}</p>

      <hr />

      {/* Stats */}
      <div className="flex gap-4 text-sm text-gray-600">
        <span className="flex items-center gap-1">
          <Trophy size={14} /> {team.wins} Kemenangan
        </span>
        <span className="flex items-center gap-1">
          <Swords size={14} /> {team.competitions} Kompetisi
        </span>
      </div>

      <hr />

      {/* Members */}
      <div>
        <p className="text-sm font-medium mb-2">Anggota:</p>

        <div className="flex flex-wrap gap-2">
          {team.members.map((member, i) => (
            <span
              key={i}
              className="bg-gray-100 px-2 py-1 rounded text-xs"
            >
              {member}
            </span>
          ))}

          {/* Slot kosong */}
          {team.maxMembers - team.members.length > 0 && (
            <span className="bg-blue-50 px-2 py-1 rounded text-xs text-blue-600">
              +{team.maxMembers - team.members.length} slot kosong
            </span>
          )}
        </div>
      </div>

      {/* Button */}
      <button className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:opacity-90">
        ✓ Minta Bergabung
      </button>
    </div>
  );
}