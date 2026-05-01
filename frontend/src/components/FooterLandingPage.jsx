import { Trophy } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-semibold">CompeteHub</span>
        </div>

        {/* Text */}
        <p className="text-black text-sm">
          © 2026 CompeteHub. Empowering professionals to compete and grow.
        </p>

      </div>
    </footer>
  );
}

export default Footer;