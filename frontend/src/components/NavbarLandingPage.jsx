import { Trophy } from "lucide-react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Navbar() {
  // const navigate = useNavigate();

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-linear-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
          <Trophy className="text-white w-5 h-5" />
        </div>
        <span className="text-xl font-bold text-purple-600 tracking-wide">
          TEEMO
        </span>
      </div>

      {/* Login Button */}
      <Link to="/login" 
      className="bg-linear-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full font-medium shadow-md hover:opacity-90 transition">
        Login
      </Link>
    </nav>
  );
}

export default Navbar;