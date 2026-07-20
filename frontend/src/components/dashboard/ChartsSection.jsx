import Card from "../ui/Card";

import GlobalBarChart from "../charts/GlobalBarChart";
import LineChartHistory from "../charts/LineChartHistory";

function ChartsSection({
  countries = [],
  stats,
}) {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Data Visualization
        </h2>

        <p className="mt-2 text-gray-600">
          Visualize the global and country-level COVID-19
          statistics.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <GlobalBarChart
            countries={countries}
          />
        </Card>

        <Card>
          <LineChartHistory
            stats={stats}
          />
        </Card>
      </div>
    </section>
  );
}

export default ChartsSection;