import CompetitionCard from "./CompetitionCard";

export default function RecentCompetitions() {
  const competitions = [
    {
      title: "AI Innovation Summit",
      description: "Kompetisi AI nasional",
      date: "12 Jan 2024",
      status: "Pemenang",
    },
    {
      title: "Web Dev Challenge",
      description: "Kompetisi web development",
      date: "5 Feb 2024",
      status: "Finalis",
    },
  ];

  return (
    <div className="space-y-3">
      {competitions.map((item, i) => (
        <CompetitionCard key={i} {...item} />
      ))}
    </div>
  );
}