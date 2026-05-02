import { Target } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar({ user = { name: "sadasd" }, onLogout }) {
  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Feed", path: "/feed" },
    { name: "Competitions", path: "/competitions" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <Target className="text-pink-500 w-5 h-5" />
          <span className="font-bold text-blue-900 text-lg tracking-wide">
            TEEMO
          </span>
        </div>

        {/* CENTER: Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-500 transition"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT: User */}
        <div className="flex items-center gap-4">
          
          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-sm">
            🌙
          </div>

          {/* Username */}
          <span className="text-sm font-medium text-gray-700">
            {user?.name}
          </span>

          {/* Logout */}
          <button
            onClick={onLogout}
            className="px-4 py-1.5 text-sm border border-red-300 text-red-500 rounded-lg hover:bg-red-50 transition"
          >
            Logout
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;