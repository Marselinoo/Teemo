function CompetitionImage({ src, alt, status, initials }) {
  return (
    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      {/* Org initials badge */}
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1 text-xs font-bold text-slate-700 shadow-sm">
        {initials}
      </div>
      {/* Status badge */}
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
        {status}
      </div>
    </div>
  );
}

export default CompetitionImage;
