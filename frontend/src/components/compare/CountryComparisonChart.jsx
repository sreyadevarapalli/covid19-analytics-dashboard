import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import Card from "../ui/Card";
import { formatNumber } from "../../utils/formatNumber";

function CountryComparisonChart({
  countryOneData,
  countryTwoData,
}) {
  if (!countryOneData || !countryTwoData) {
    return null;
  }

  const chartData = [
    {
      metric: "Cases",
      [countryOneData.country]: countryOneData.cases,
      [countryTwoData.country]: countryTwoData.cases,
    },
    {
      metric: "Recovered",
      [countryOneData.country]: countryOneData.recovered,
      [countryTwoData.country]: countryTwoData.recovered,
    },
    {
      metric: "Deaths",
      [countryOneData.country]: countryOneData.deaths,
      [countryTwoData.country]: countryTwoData.deaths,
    },
    {
      metric: "Active",
      [countryOneData.country]: countryOneData.active,
      [countryTwoData.country]: countryTwoData.active,
    },
    {
      metric: "Tests",
      [countryOneData.country]: countryOneData.tests,
      [countryTwoData.country]: countryTwoData.tests,
    },
  ];

  return (
    <Card className="mt-10">
      <h2 className="mb-6 text-center text-2xl font-bold">
        Comparison Chart
      </h2>

      <ResponsiveContainer width="100%" height={450}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="metric" />

          <YAxis tickFormatter={formatNumber} />

          <Tooltip formatter={(value) => formatNumber(value)} />

          <Legend />

          <Bar
            dataKey={countryOneData.country}
            fill="#2563eb"
            radius={[6, 6, 0, 0]}
          />

          <Bar
            dataKey={countryTwoData.country}
            fill="#16a34a"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default CountryComparisonChart;