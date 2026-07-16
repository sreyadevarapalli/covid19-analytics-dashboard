import Layout from "../../components/layout/Layout";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import DashboardStats from "../../components/dashboard/DashboardStats";
import ChartsSection from "../../components/dashboard/ChartsSection";
import TopCountries from "../../components/dashboard/TopCountries";

function Dashboard() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <DashboardHeader />
        <DashboardStats />
        <ChartsSection />
        <TopCountries />
      </div>
    </Layout>
  );
}

export default Dashboard;