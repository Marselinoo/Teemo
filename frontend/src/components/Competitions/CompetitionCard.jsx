import CompetitionImage from "./CompetitionImage";
import CompetitionInfo from "./CompetitionInfo";
import CompetitionMeta from "./CompetitionMeta";
import CompetitionAction from "./CompetitionAction";

function CompetitionCard({ competition, onDetail }) {
  const { initials, status, image, category, title, description, participants, price, deadline, accentColor } = competition;

  return (
    <div
      className="bg-white rounded-2xl border border-slate-100 p-4 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200"
      style={{ borderTop: `3px solid ${accentColor}` }}
    >
      <CompetitionImage
        src={image}
        alt={title}
        status={status}
        initials={initials}
      />
      <CompetitionInfo
        category={category}
        title={title}
        description={description}
        participants={participants}
      />
      <CompetitionMeta prize={price} deadline={deadline} />
      <CompetitionAction onClick={() => onDetail?.(competition)} />
    </div>
  );
}

export default CompetitionCard;
