import StatsGrid from "./StatsGrid";
import GlobalOverview from "./GlobalOverview";

function DashboardStats({ stats }) {
  return (
    <>
      <StatsGrid stats={stats} />
      <GlobalOverview stats={stats} />
    </>
  );
}

export default DashboardStats;