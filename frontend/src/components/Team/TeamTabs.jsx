import { useState } from "react";
import { Plus, Search, Heart } from "lucide-react";
import { getTeams } from "../../utils/teams";
import { getInvites } from "../../utils/inviteTeam";

const tabs = [
  {
    key: "create",
    label: "Buat Tim Baru",
    icon: Plus,
  },
  {
    key: "explore",
    label: "Jelajahi Tim",
    icon: Search,
    count: getTeams().length,
  },
  {
    key: "invite",
    label: "Undangan",
    icon: Heart,
    count: getInvites().length,
  },
];

export default function TeamTabs({ onChange }) {
  const [active, setActive] = useState("create");

  const handleClick = (key) => {
    setActive(key);
    onChange?.(key); // kirim ke parent kalau perlu
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col sm:flex-row gap-2 bg-gray-100 p-1.5 rounded-xl w-full sm:w-fit">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.key;

          return (
            <button key={tab.key} onClick={() => handleClick(tab.key)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition
                ${isActive
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-600 hover:bg-gray-200"
                }
              `}
            >
              <Icon size={16} className="" />

              {tab.label}

              {tab.count !== undefined && (
                <span
                  className={`
                    text-xs px-2 py-0.5 rounded-full
                    ${isActive
                      ? "bg-white text-blue-600"
                      : "bg-gray-300 text-gray-700"
                    }
                  `}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}