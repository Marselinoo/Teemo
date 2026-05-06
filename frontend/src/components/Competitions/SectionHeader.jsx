function SectionHeader ({ count, title }) {
  return (
    <div className="flex items-start justify-between flex-wrap gap-3 mb-5">
      <div>
        <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
          {count} Hasil
        </p>
        <h2 className="text-2xl font-extrabold text-slate-900">{title}</h2>
      </div>
      <span className="bg-yellow-300 text-yellow-900 border border-yellow-400 rounded-lg px-4 py-2 text-xs font-bold">
        Pendaftaran dibuka
      </span>
    </div>
  );
};

export default SectionHeader;
