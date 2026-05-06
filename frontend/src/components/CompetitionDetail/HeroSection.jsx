import { Users, Wallet, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection({
  image,
  category,
  title,
  description,
  participants,
  price,
  deadline,
}) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Left Image */}
      <div className="bg-[#EEF2FF] rounded-3xl overflow-hidden flex justify-center items-center h-64 md:h-96">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Content */}
      <div>
        {/* Category */}
        <p className="text-indigo-500 font-medium mb-4">
          {category}
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-950 leading-tight mb-6">
          {title}
        </h1>

        {/* Description */}
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-10">
          {description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 sm:gap-10 border-b border-slate-200 pb-8 mb-8">
          {/* Participants */}
          <div className="flex flex-col items-center text-center">
            <Users
              className="text-indigo-500 mb-2"
              size={22}
            />

            <p className="text-slate-700 font-medium">
              {participants}
            </p>
          </div>

          {/* Prize */}
          <div className="flex flex-col items-center text-center">
            <Wallet
              className="text-indigo-500 mb-2"
              size={22}
            />

            <p className="text-slate-700 font-medium">
              {price}
            </p>
          </div>

          {/* Deadline */}
          <div className="flex flex-col items-center text-center">
            <Calendar
              className="text-indigo-500 mb-2"
              size={22}
            />

            <p className="text-slate-700 font-medium">
              {deadline}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4">
          <Link to="/team" 
          className="bg-indigo-500 hover:bg-indigo-600 transition text-white font-semibold px-8 py-4 rounded-2xl">
            ✓ Ikuti Kompetisi
          </Link>

          <button className="border border-indigo-500 text-indigo-500 hover:bg-indigo-50 transition font-semibold px-8 py-4 rounded-2xl">
            📌 Simpan
          </button>
        </div>
      </div>
    </section>
  );
}