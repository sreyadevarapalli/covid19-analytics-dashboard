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

function Analytics() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Header */}
        <AnalyticsHeader />

        {/* Global Visualizations */}
        <AnalyticsSection title="Global Visualizations">
          <AnalyticsGrid>

            <ChartContainer title="Top 30 Countries by Total Cases">
              <GlobalCasesChart />
            </ChartContainer>

            <ChartContainer title="Top 30 Active Cases">
              <ActiveCasesAreaChart />
            </ChartContainer>

          </AnalyticsGrid>
        </AnalyticsSection>

        {/* Distribution */}
        <AnalyticsSection title="Distribution">
          <AnalyticsGrid>

            <ChartContainer title="Top 10 Cases Distribution">
              <CasesPieChart />
            </ChartContainer>

            <ChartContainer title="Top 10 Countries by Deaths">
              <TopDeathsBarChart />
            </ChartContainer>

          </AnalyticsGrid>
        </AnalyticsSection>

        {/* Continent Analysis */}
        <AnalyticsSection title="Continent Analysis">
          <ContinentAnalysis />
        </AnalyticsSection>

        {/* Global Insights */}
        <AnalyticsSection title="Growth & Recovery Analysis">
          <GlobalInsights />
        </AnalyticsSection>

      </div>
    </Layout>
  );
}

export default Analytics;