import Layout from "../../components/layout/Layout";

import DashboardHeader from "../../components/dashboard/DashboardHeader";
import Hero from "../../components/dashboard/Hero";
import DashBoardStats from "../../components/dashboard/DashBoardStats";
import GlobalOverview from "../../components/dashboard/GlobalOverview";
import TopCountries from "../../components/dashboard/TopCountries";
import ChartsSection from "../../components/dashboard/ChartsSection";
import Features from "../../components/dashboard/Features";

import useGlobalStats from "../../hooks/useGlobalStats";
import useCountries from "../../hooks/useCountries";

function Dashboard() {
  const {
    stats,
    loading: statsLoading,
    error: statsError,
  } = useGlobalStats();

  const {
    countries,
    loading: countriesLoading,
    error: countriesError,
  } = useCountries();

  const loading = statsLoading || countriesLoading;
  const error = statsError || countriesError;

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <DashboardHeader />

        <Hero />

        {loading && (
          <div className="mx-auto max-w-7xl px-6 py-10 text-center">
            <p className="text-lg text-gray-500">
              Loading dashboard data...
            </p>
          </div>
        )}

        {error && (
          <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-600">
              {error}
            </div>
          </div>
        )}

        {!loading && !error && (
          <main className="mx-auto max-w-7xl space-y-12 px-6 py-10">
            <DashBoardStats stats={stats} />

            <GlobalOverview stats={stats} />

            <TopCountries countries={countries} />

            <ChartsSection
              countries={countries}
              stats={stats}
            />

            <Features />
          </main>
        )}
      </div>
    </Layout>
  );
}

export default Dashboard;