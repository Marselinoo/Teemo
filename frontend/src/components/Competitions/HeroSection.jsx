import SearchBar from "./SearchBar";

function HeroSection ({ searchValue, onSearchChange, onCreateTeam }) {
  return (
    //section hero tempat penampungan judul, deskripsi, dan search bar
    <section className="w-full bg-gradient-to-br from-blue-500 via-indigo-200 to-purple-50 py-16 px-6 flex flex-col items-center text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
        <span className="text-xs font-bold text-blue-900 tracking-widest uppercase">
          Teemo Competitions
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 max-w-xl">
        Temukan kompetisi
        <br />
        yang pas untuk timmu
      </h1>

      {/* Subtitle */}
      <p className="text-slate-500 text-base leading-relaxed max-w-md mb-10">
        Jelajahi tantangan teknologi, desain, data, dan keamanan siber. Filter
        peluang terbaik lalu bentuk tim yang siap bertanding.
      </p>

      {/* Search */}
      <SearchBar
        value={searchValue}
        onChange={onSearchChange}
        onCreateTeam={onCreateTeam}
      />
    </section>
  );
};

export default HeroSection;
