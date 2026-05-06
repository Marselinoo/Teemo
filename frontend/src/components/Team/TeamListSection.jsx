import TeamCard from "./TeamCard";

export default function TeamListSection({ teams }) {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h2 className="text-center text-xl font-semibold">
        🔍 Tim yang Tersedia
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}