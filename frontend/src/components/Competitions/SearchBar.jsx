import SearchInput from "./SearchInput";
import CreateTeamButton from "./CreateTeamButton";

function SearchBar ({ value, onChange, onCreateTeam }) {
  return (
    <div className="flex items-center bg-white rounded-2xl shadow-lg shadow-blue-100/60 w-full max-w-2xl overflow-hidden border border-slate-100">
      <SearchInput value={value} onChange={onChange} />
      <div className="w-px h-8 bg-slate-200 shrink-0" />
      <CreateTeamButton onClick={onCreateTeam} />
    </div>
  );
};

export default SearchBar;
