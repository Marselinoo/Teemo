import FilterChip from "./FilterChip";

const CATEGORIES = [
  "Semua",
  "Artificial Intelligence",
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Cybersecurity",
  "Data Science",
];

function CategoryFilter ({ active, onSelect }) {
  return (
    <div className="flex gap-2 flex-wrap mb-8">
      {CATEGORIES.map((category) => (
        <FilterChip
          key={category}
          label={category}
          active={active === category}
          onClick={() => onSelect(category)}
        />
      ))}
    </div>
  );
};

export default CategoryFilter;
