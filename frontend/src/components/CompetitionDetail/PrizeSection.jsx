import { Trophy } from "lucide-react";

export default function PrizeSection({ prizes }) {
  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-bold text-indigo-950 text-center mb-8 sm:mb-10">
        🏆 Hadiah Pemenang
      </h2>

      {/* Prize List */}
      <div className="space-y-4 sm:space-y-5">
        {prizes.map((item, index) => (
          <div
            key={index}
            className="
              flex flex-col md:flex-row
              md:items-center
              md:justify-between
              gap-5
              bg-slate-50
              border border-slate-100
              rounded-2xl
              p-5 sm:p-6
            "
          >
            {/* Left */}
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div
                className="
                  w-11 h-11 sm:w-12 sm:h-12
                  rounded-2xl
                  bg-amber-100
                  flex items-center justify-center
                  shrink-0
                "
              >
                <Trophy
                  className="text-amber-500"
                  size={22}
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-indigo-950 mb-1">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Prize */}
            <div className="md:text-right">
              <p className="text-xl sm:text-2xl font-bold text-indigo-500">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}