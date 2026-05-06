function FilterChip ({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-all duration-150 cursor-pointer
        ${
          active
            ? "bg-blue-600 text-white border-blue-600 shadow-sm"
            : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600"
        }
      `}
    >
      {label}
    </button>
  );
};

export default FilterChip;
