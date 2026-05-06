function CreateTeamButton ({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-bold px-7 py-3 rounded-xl m-1.5 transition-colors duration-200 whitespace-nowrap cursor-pointer border-none"
    >
      Buat Tim
    </button>
  );
};

export default CreateTeamButton;
