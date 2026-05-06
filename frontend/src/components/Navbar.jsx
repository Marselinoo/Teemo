import { Target, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/UseAuth";

function Navbar() {
  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Feed", path: "/feed" },
    { name: "Competitions", path: "/competitions" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">

        {/* LEFT */}
        <div className="flex items-center gap-2 flex-1">
          <Target className="text-pink-500 w-5 h-5" />
          <span className="font-bold text-blue-900 text-lg tracking-wide">
            TEEMO
          </span>
        </div>

        {/* CENTER (DESKTOP) */}
        <nav className="hidden md:flex justify-center flex-1 gap-8 text-sm font-medium text-gray-600">
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

        {/* RIGHT */}
        <div className="flex items-center justify-end gap-3 flex-1">
          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* DESKTOP USER */}
          <div className="hidden md:flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-sm">
              🌙
            </div>

            <span className="text-sm font-medium text-gray-700 truncate max-w-[120px]">
              {user?.name}
            </span>

            <button
              onClick={logout}
              className="px-4 py-1.5 text-sm border border-red-300 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden border-t border-gray-200 px-4 py-3 space-y-3 bg-white">
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block text-sm text-gray-700 hover:text-blue-500"
            >
              {item.name}
            </NavLink>
          ))}

          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-sm text-gray-600">{user?.name}</span>

            <button
              onClick={logout}
              className="text-sm text-red-500"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;