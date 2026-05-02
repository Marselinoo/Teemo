import {
  Trophy,
  Users,
  Award,
  Briefcase,
  TrendingUp,
  Network,
} from "lucide-react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function HeroSection() {
  // const navigate = useNavigate();
  
  const features = [
    { title: "Professional Network", icon: Network },
    { title: "Competitions", icon: Trophy },
    { title: "Team Building", icon: Users },
    { title: "Certificates", icon: Award },
    { title: "Opportunities", icon: Briefcase },
    { title: "Growth", icon: TrendingUp },
  ];

  return (
    <section className="bg-gray-50 py-28 px-6 text-center">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Compete. Connect.
        </span>
        <br />
        <span className="text-black">Achieve Together.</span>
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-black max-w-2xl mx-auto text-lg">
        Join a professional network where ambition meets opportunity.
        Participate in competitions, build teams, showcase your achievements,
        and grow your career.
      </p>

      {/* CTA Button */}
      <div className="mt-8">
        <Link to="/login" 
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition">
          Mulai Sekarang →
        </Link>
      </div>

      {/* Feature List */}
      <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center"
            >
              <Icon className="w-6 h-6 text-purple-500 mb-3" />
              <p className="text-sm font-medium text-black">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HeroSection;