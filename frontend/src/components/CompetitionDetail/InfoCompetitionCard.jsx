import {
  Info,
  CalendarDays,
  Users,
  Trophy,
} from "lucide-react";

export default function InfoCompetitionCard({
  category,
  startDate,
  participants,
  price,
}) {
  return (
    <section className="bg-white rounded-3xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <Info
          className="text-indigo-500"
          size={24}
        />

        <h2 className="text-2xl font-bold text-indigo-950">
          Informasi
        </h2>
      </div>

      {/* Content */}
      <div className="space-y-7">
        {/* Category */}
        <div className="text-center">
          <p className="text-sm text-slate-500 mb-2">
            Kategori
          </p>

          <h3 className="text-xl font-bold text-indigo-950 leading-snug">
            {category}
          </h3>
        </div>

        {/* Start Date */}
        <div className="flex items-start gap-4">
          <div
            className="
              w-11 h-11
              rounded-2xl
              bg-indigo-50
              flex items-center justify-center
              shrink-0
            "
          >
            <CalendarDays
              className="text-indigo-500"
              size={20}
            />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Dimulai
            </p>

            <h3 className="font-bold text-indigo-950">
              {startDate}
            </h3>
          </div>
        </div>

        {/* Participants */}
        <div className="flex items-start gap-4">
          <div
            className="
              w-11 h-11
              rounded-2xl
              bg-cyan-50
              flex items-center justify-center
              shrink-0
            "
          >
            <Users
              className="text-cyan-500"
              size={20}
            />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Total Peserta
            </p>

            <h3 className="font-bold text-indigo-950">
              {participants}
            </h3>
          </div>
        </div>

        {/* Prize */}
        <div className="flex items-start gap-4">
          <div
            className="
              w-11 h-11
              rounded-2xl
              bg-amber-50
              flex items-center justify-center
              shrink-0
            "
          >
            <Trophy
              className="text-amber-500"
              size={20}
            />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Total Hadiah
            </p>

            <h3 className="font-bold text-indigo-950">
              {price}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}