function CompetitionAction({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-900 hover:bg-blue-700 active:bg-blue-950 text-white text-sm font-bold py-3.5 rounded-xl transition-colors duration-200 cursor-pointer border-none"
    >
      Lihat Detail
    </button>
  );
}

export default CompetitionAction;
