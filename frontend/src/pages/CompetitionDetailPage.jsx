import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

import HeroSection from "../components/CompetitionDetail/HeroSection";
import TimelineSection from "../components/CompetitionDetail/TimelineSection";
import PrizeSection from "../components/CompetitionDetail/PrizeSection";
import RequirementSection from "../components/CompetitionDetail/RequirementSection";
import FAQSection from "../components/CompetitionDetail/FAQSection";
import RulesSection from "../components/CompetitionDetail/RulesSection";
import InfoCompetitionCard from "../components/CompetitionDetail/InfoCompetitionCard";

import getCompetitions from "../utils/comptetitions";

export default function CompetitionDetailPage() {
  const { id } = useParams();
  const competition = getCompetitions().find((c) => String(c.id) === id);

  return (
    <>
      <Navbar />

      <main className="bg-slate-50 min-h-screen py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          
          {/* Hero */}
          <HeroSection
            image={competition.image}
            category={competition.category}
            title={competition.title}
            description={competition.description}
            participants={competition.participants}
            price={competition.price}
            deadline={competition.deadline}
          />

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left */}
            <div className="lg:col-span-2 space-y-6">
              <TimelineSection timelines={competition.timelines} />

              <RequirementSection requirements={competition.requirements} />

              <PrizeSection prizes={competition.prizes} />

              <RulesSection rules={competition.rules} />
            </div>

            {/* Right */}
            <div className="space-y-6">
              <InfoCompetitionCard
                category={competition.category}
                startDate={competition.startDate}
                participants={competition.participants}
                price={competition.price}
              />

              <FAQSection faqs={competition.faqs} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}