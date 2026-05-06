import { Users } from 'lucide-react';
// const UsersIcon = () => (
//   <svg
//     className="w-3.5 h-3.5"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//     <circle cx="9" cy="7" r="4" />
//     <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//   </svg>
// );

function CompetitionInfo ({ category, title, description, participants }) {
  return (
    <div className="mb-4 flex-1">
      <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1.5">
        {category}
      </p>
      <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3">
        {description}
      </p>
      <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
        {/* <UsersIcon /> */}
        <Users className="w-3.5 h-3.5" />
        <span>{participants.toLocaleString("id-ID")} peserta</span>
      </div>
    </div>
  );
};

export default CompetitionInfo;
