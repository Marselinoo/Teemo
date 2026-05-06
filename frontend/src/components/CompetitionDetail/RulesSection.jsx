export default function RulesSection({ rules }) {
  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-bold text-indigo-950 text-center mb-8 sm:mb-10">
        📜 Peraturan Kompetisi
      </h2>

      {/* Rules List */}
      <div className="space-y-4">
        {rules.map((rule, index) => (
          <div
            key={index}
            className="
              flex items-start gap-4
              bg-slate-50
              border border-slate-100
              rounded-2xl
              p-4 sm:p-5
            "
          >
            {/* Number */}
            <div
              className="
                w-8 h-8 sm:w-9 sm:h-9
                rounded-full
                bg-indigo-500
                text-white
                flex items-center justify-center
                font-bold
                text-sm sm:text-base
                shrink-0
              "
            >
              {index + 1}
            </div>

            {/* Text */}
            <p className="text-sm sm:text-lg text-slate-700 leading-relaxed">
              {rule}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}