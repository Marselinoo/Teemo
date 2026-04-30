import { Trophy, Users, Award } from "lucide-react";

function FeatureHighlightSection() {
  const features = [
    {
      title: "Join Competitions",
      description:
        "Browse hundreds of competitions across tech, design, and business. Find your challenge and compete for prizes.",
      icon: Trophy,
      color: "text-yellow-300",
    },
    {
      title: "Build Teams",
      description:
        "Connect with talented professionals, form teams, and collaborate on competition projects together.",
      icon: Users,
      color: "text-cyan-300",
    },
    {
      title: "Show Credentials",
      description:
        "Display your certificates, achievements, and competition wins on your professional profile.",
      icon: Award,
      color: "text-green-300",
    },
  ];

  return (
    <section className="bg-linear-to-r from-purple-600 to-pink-500 py-20 px-6 text-white text-center">
      
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold">
        Everything You Need to Excel
      </h2>

      {/* Subtitle */}
      <p className="mt-4 text-white/80 max-w-2xl mx-auto">
        Discover competitions, build your network, and showcase your expertise
      </p>

      {/* Cards */}
      <div className="mt-14 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-left hover:scale-105 transition"
            >
              <Icon className={`w-8 h-8 mb-4 ${item.color}`} />

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-white/80 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FeatureHighlightSection;