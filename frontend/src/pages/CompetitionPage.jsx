// import { useState } from "react";
// import HeroSection from "./components//HeroSection";
// import SectionHeader from "./components/SectionHeader";
// import CategoryFilter from "./components/CategoryFilter";
// import CompetitionCard from "./components/CompetitionCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import HeroSection from "../components/Competitions/HeroSection";
import SectionHeader from "../components/Competitions/SectionHeader";
import CategoryFilter from "../components/Competitions/CategoryFilter";
import CompetitionCard from "../components/Competitions/CompetitionCard";
import getCompetitions from "../utils/comptetitions";
import Navbar from "../components/Navbar";

function CompetitionPage() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered = getCompetitions().filter((c) => {
    const matchCat = activeCategory === "Semua" || c.tags.includes(activeCategory);
    const matchSearch =
      !search ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen font-sans">
        <HeroSection
          searchValue={search}
          onSearchChange={setSearch}
          onCreateTeam={() => alert("Buat Tim diklik!")}
        />

        <main className="max-w-7xl mx-auto px-6 py-10">
          <SectionHeader count={filtered.length} title="Kompetisi Pilihan" />
          <CategoryFilter active={activeCategory} onSelect={setActiveCategory} />

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((competition) => (
                <CompetitionCard
                  key={competition.id}
                  competition={competition}
                  onDetail={(c) => navigate(`/competitions/${c.id}`)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-400 text-base">
              Tidak ada kompetisi yang sesuai filter.
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default CompetitionPage;