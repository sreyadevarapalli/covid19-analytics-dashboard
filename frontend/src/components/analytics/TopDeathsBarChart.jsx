import { useMemo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import useCountries from "../../hooks/useCountries";
import { formatNumber } from "../../utils/formatNumber";

function TopDeathsBarChart() {
  const { countries, loading } = useCountries();

  const chartData = useMemo(() => {
    return [...countries]
      .sort((a, b) => b.deaths - a.deaths)
      .slice(0, 10)
      .map((country) => ({
        country: country.country,
        deaths: country.deaths,
      }))
      .reverse();
  }, [countries]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center text-gray-500">
        Loading chart...
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={chartData}
        layout="vertical"
        margin={{
          top: 10,
          right: 30,
          left: 40,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
          type="number"
          tickFormatter={formatNumber}
        />

        <YAxis
          type="category"
          dataKey="country"
          width={110}
        />

        <Tooltip
          formatter={(value) => formatNumber(value)}
        />

        <Bar
          dataKey="deaths"
          fill="#dc2626"
          radius={[0, 8, 8, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default TopDeathsBarChart;