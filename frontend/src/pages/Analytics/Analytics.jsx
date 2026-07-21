import Layout from "../../components/layout/Layout";

import AnalyticsHeader from "../../components/analytics/AnalyticsHeader";
import AnalyticsSection from "../../components/analytics/AnalyticsSection";
import AnalyticsGrid from "../../components/analytics/AnalyticsGrid";
import ChartContainer from "../../components/analytics/ChartContainer";

import GlobalCasesChart from "../../components/analytics/GlobalCasesChart";
import ActiveCasesAreaChart from "../../components/analytics/ActiveCasesAreaChart";
import CasesPieChart from "../../components/analytics/CasesPieChart";
import TopDeathsBarChart from "../../components/analytics/TopDeathsBarChart";
import ContinentAnalysis from "../../components/analytics/ContinentAnalysis";
import GlobalInsights from "../../components/analytics/GlobalInsights";

import useAnalytics from "../../hooks/useAnalytics";

function Analytics() {
  const {
    overview,
    topCountries,
    continents,
    loading,
    error,
  } = useAnalytics();

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Header */}
        <AnalyticsHeader />

        {/* Loading State */}
        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-lg text-gray-500">
              Loading analytics...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="rounded-xl bg-red-50 p-6 text-center text-red-600">
            {error}
          </div>
        )}

        {/* Analytics Content */}
        {!loading && !error && (
          <>
            {/* Global Visualizations */}
            <AnalyticsSection title="Global Visualizations">
              <AnalyticsGrid>

                <ChartContainer title="Top 30 Countries by Total Cases">
                  <GlobalCasesChart
                    countries={topCountries}
                  />
                </ChartContainer>

                <ChartContainer title="Top 30 Active Cases">
                  <ActiveCasesAreaChart
                    countries={topCountries}
                  />
                </ChartContainer>

              </AnalyticsGrid>
            </AnalyticsSection>

            {/* Distribution */}
            <AnalyticsSection title="Distribution">
              <AnalyticsGrid>

                <ChartContainer title="Top 10 Cases Distribution">
                  <CasesPieChart
                    countries={topCountries}
                  />
                </ChartContainer>

                <ChartContainer title="Top 10 Countries by Deaths">
                  <TopDeathsBarChart
                    countries={topCountries}
                  />
                </ChartContainer>

              </AnalyticsGrid>
            </AnalyticsSection>

            {/* Continent Analysis */}
            <AnalyticsSection title="Continent Analysis">
              <ContinentAnalysis
                continents={continents}
              />
            </AnalyticsSection>

            {/* Global Insights */}
            <AnalyticsSection title="Growth & Recovery Analysis">
              <GlobalInsights
                overview={overview}
              />
            </AnalyticsSection>
          </>
        )}

      </div>
    </Layout>
  );
}

export default Analytics;