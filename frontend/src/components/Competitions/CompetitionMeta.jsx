function MetaItem ({ label, value }) {
  return(
    <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
      <p className="text-xs text-slate-400 font-semibold mb-1">{label}</p>
      <p className="text-sm font-bold text-slate-800">{value}</p>
    </div>
  )
}

function CompetitionMeta ({ prize, deadline }) {
  return (
    <div className="flex gap-2 mb-4">
      <MetaItem label="Hadiah" value={prize} />
      <MetaItem label="Deadline" value={deadline} />
    </div>
  );
};

export default CompetitionMeta;
