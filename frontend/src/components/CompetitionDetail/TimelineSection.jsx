export default function TimelineSection({
  timelines,
}) {
  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-bold text-indigo-950 text-center mb-8 sm:mb-10">
        🗓️ Timeline
      </h2>

      {/* Timeline */}
      <div className="space-y-8 sm:space-y-10">
        {timelines.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 sm:gap-6"
          >
            {/* Line */}
            <div className="flex flex-col items-center">
              {/* Dot */}
              <div
                className="
                  w-4 h-4 sm:w-5 sm:h-5
                  rounded-full
                  bg-indigo-500
                  z-10
                "
              />

              {/* Vertical Line */}
              {index !== timelines.length - 1 && (
                <div className="w-1 flex-1 bg-indigo-100 mt-2" />
              )}
            </div>

            {/* Content */}
            <div className="pb-4">
              <h3 className="text-lg sm:text-2xl font-bold text-indigo-950 mb-1">
                {item.date}
              </h3>

              <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}