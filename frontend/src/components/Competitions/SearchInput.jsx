function SearchInput ({ value, onChange }) {
  return (
    <div className="flex items-center gap-3 flex-1 px-5 py-3">
      <svg
        className="w-5 h-5 text-slate-400 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        placeholder="Cari kompetisi"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 border-none outline-none bg-transparent text-sm text-slate-700 placeholder:text-slate-400"
      />
    </div>
  );
};

export default SearchInput;
