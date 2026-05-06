import { useState } from "react";
import TeamTabs from "../components/team/TeamTabs";
import CreateTeamForm from "../components/team/CreateTeamForm";
import TeamListSection from "../components/team/TeamListSection";
import Navbar from "../components/Navbar";
import { getTeams } from "../utils/teams";
import InviteListSection from "../components/Team/InviteListCard";
import { getInvites } from "../utils/inviteTeam";

export default function TeamPage() {
  const [tab, setTab] = useState("create");

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-50 md:max-w-6xl lg:mx-auto">
        <h1 className="text-center text-2xl font-bold mb-2">
          Kelola Tim Anda
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Buat tim baru atau bergabung dengan tim yang sudah ada
        </p>

        {/* 🔥 kirim setTab ke TeamTabs */}
        <TeamTabs onChange={setTab} />

        <div className="mt-6">
          {/* 🔥 conditional render */}
          {tab === "create" && <CreateTeamForm />}
          {tab === "explore" && <TeamListSection teams={getTeams()}/>}
          {tab === "invite" && <InviteListSection invites={getInvites()} />}
        </div>
      </div>
    </>
  );
}