import { useState } from "react";

export default function ProfileTabs({ onChange }) {
  const [activeTab, setActiveTab] = useState("tentang");

  const tabs = [
    { label: "Tentang", value: "tentang" },
    { label: "Sertifikat", value: "sertifikat" },
    { label: "Pencapaian", value: "pencapaian" },
  ];

  function handleClick(tab) {
    setActiveTab(tab);
    if (onChange) onChange(tab);
  }

  return (
    <div className="max-w-5xl mx-auto mt-6 px-4">
      <div className="bg-white p-2 rounded-2xl shadow-sm flex gap-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value;

          return (
            <button
              key={tab.value}
              onClick={() => handleClick(tab.value)}
              className={`flex-1 py-2 rounded-xl text-sm font-medium transition
                ${
                  isActive
                    ? "bg-blue-500 text-white shadow"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}