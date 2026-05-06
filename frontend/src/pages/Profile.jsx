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

import CertificatesSection from "../components/Profile/CertificatesSection";
import AchievementsSection from "../components/Profile/AchievementsSection";

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
      <div className="max-w-5xl mx-auto mt-6 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
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
            <CertificatesSection />
          )}

          {activeTab === "pencapaian" && (
            <AchievementsSection />
          )}

        </div>

        {/* RIGHT SIDE */}
        <aside className="space-y-6">
          <NetworkCard />
          <InfoCard />
          <RecentCompetitions />
        </aside>

      </div>
    </div>
  );
}