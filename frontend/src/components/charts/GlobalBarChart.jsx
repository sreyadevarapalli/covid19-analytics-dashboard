import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function GlobalBarChart({ countries = [] }) {
  const chartData = countries
    .filter((country) => country)
    .sort(
      (a, b) =>
        (Number(b.cases) || 0) -
        (Number(a.cases) || 0)
    )
    .slice(0, 10)
    .map((country) => ({
      country: country.country,
      cases: Number(country.cases) || 0,
    }));

  if (chartData.length === 0) {
    return (
      <div className="flex h-80 items-center justify-center">
        <p className="text-gray-500">
          No country data available.
        </p>
      </div>
    );
  }

  return (
    <div className="h-80 w-full">
      <h3 className="mb-4 text-lg font-bold text-gray-800">
        Top Countries by Cases
      </h3>

      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <BarChart
          data={chartData}
          margin={{
            top: 10,
            right: 20,
            left: 10,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="country"
            angle={-35}
            textAnchor="end"
            interval={0}
          />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="cases"
            name="Cases"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GlobalBarChart;