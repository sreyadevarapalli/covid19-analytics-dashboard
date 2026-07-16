import Layout from "../../components/layout/Layout";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import DashboardStats from "../../components/dashboard/DashboardStats";
import ChartsSection from "../../components/dashboard/ChartsSection";
import TopCountries from "../../components/dashboard/TopCountries";

import Loader from "../../components/ui/Loader";
import ErrorMessage from "../../components/ui/ErrorMessage";

import useGlobalStats from "../../hooks/useGlobalStats";


function Dashboard() {

  const { stats, loading, error } = useGlobalStats();


  if (loading) {
    return (
      <Layout>
        <Loader text="Loading Dashboard..." />
      </Layout>
    );
  }


  if (error) {
    return (
      <Layout>
        <ErrorMessage message={error} />
      </Layout>
    );
  }


  return (
    <Layout>

      <div className="mx-auto max-w-7xl px-6 py-10">

        <DashboardHeader />

        <DashboardStats stats={stats} />

        <ChartsSection stats={stats} />

        <TopCountries />

      </div>

    </Layout>
  );
}


export default Dashboard;