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
  const {
    countries = [],
    loading,
    error,
  } = useCountries();

  const chartData = useMemo(() => {
    return [...countries]
      .sort(
        (a, b) =>
          (Number(b.deaths) || 0) -
          (Number(a.deaths) || 0)
      )
      .slice(0, 10)
      .map((country) => ({
        country:
          country.country ||
          country.country_name ||
          "Unknown",

        deaths: Number(country.deaths) || 0,
      }))
      .reverse();
  }, [countries]);

  if (loading) {
    return (
      <p className="py-10 text-center text-gray-500">
        Loading chart...
      </p>
    );
  }

  if (error) {
    return (
      <p className="py-10 text-center text-red-500">
        {error}
      </p>
    );
  }

  if (!chartData.length) {
    return (
      <p className="py-10 text-center text-gray-500">
        No chart data available.
      </p>
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
          formatter={(value) =>
            formatNumber(value)
          }
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