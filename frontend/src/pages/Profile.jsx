import { useState } from "react";

import Navbar from "../components/Navbar";

import ProfileHeader from "../components/profile/ProfileHeader";
import StatsSection from "../components/profile/StatsSection";
import ProfileTabs from "../components/profile/ProfileTabs";

import BioCard from "../components/profile/BioCard";
import SkillsSection from "../components/profile/SkillsSection";
import ExperienceSection from "../components/profile/ExperienceSection";

import NetworkCard from "../components/profile/NetworkCard";
import InfoCard from "../components/profile/InfoCard";
import RecentCompetitions from "../components/profile/RecentCompetitions";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("tentang");

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <Navbar />
      {/* Header */}
      <ProfileHeader />

      {/* Stats */}
      <StatsSection />

      {/* Tabs */}
      <ProfileTabs onChange={setActiveTab} />

      {/* Content */}
      <aside className="max-w-5xl mx-auto mt-6 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-6">
          
          {activeTab === "tentang" && (
            <>
              <BioCard />
              <SkillsSection />
              <ExperienceSection />
            </>
          )}

          {activeTab === "sertifikat" && (
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center text-gray-500">
              Belum ada sertifikat
            </div>
          )}

          {activeTab === "pencapaian" && (
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center text-gray-500">
              Belum ada pencapaian
            </div>
          )}

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <NetworkCard />
          <InfoCard />
          <RecentCompetitions />
        </div>

      </aside>
    </div>
  );
}