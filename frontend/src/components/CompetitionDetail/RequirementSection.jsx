export default function RequirementSection({
  requirements,
}) {
  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-bold text-indigo-950 text-center mb-8 sm:mb-10">
        📋 Persyaratan
      </h2>

      {/* Requirement List */}
      <div className="space-y-4">
        {requirements.map((item, index) => (
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
            {/* Check Icon */}
            <div
              className="
                w-8 h-8
                rounded-full
                bg-cyan-100
                flex items-center justify-center
                text-cyan-600
                font-bold
                shrink-0
              "
            >
              ✓
            </div>

            {/* Text */}
            <p className="text-sm sm:text-lg text-slate-700 leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}