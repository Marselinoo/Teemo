import DashboardHeader from "../components/DashboardHeader";
import StatsSection from "../components/StatsSection";
import ActivitySection from "../components/ActivitySection";
import RecommendationSection from "../components/RecommendationSection";
import Navbar from "../components/Navbar";

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <DashboardHeader name="John Doe" />
      <StatsSection />
      <div className="max-w-6xl mx-auto px-6 mt-8 flex flex-col lg:flex-row gap-8 items-stretch">
        <div className="flex-1 min-w-0 lg:basis-2/3">
          <ActivitySection />
        </div>
        <div className="flex-1 min-w-0 lg:basis-1/3">
          <RecommendationSection />
        </div>
      </div>
    </>
  );
}