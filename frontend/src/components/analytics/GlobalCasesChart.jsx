import { useMemo } from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import useCountries from "../../hooks/useCountries";
import { formatNumber } from "../../utils/formatNumber";

function GlobalCasesChart() {
  const {
    countries = [],
    loading,
    error,
  } = useCountries();

  const chartData = useMemo(() => {
    return [...countries]
      .sort(
        (a, b) =>
          (Number(b.cases) || 0) -
          (Number(a.cases) || 0)
      )
      .slice(0, 30)
      .map((country) => ({
        country:
          country.country ||
          country.country_name ||
          "Unknown",

        cases: Number(country.cases) || 0,
      }));
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
      <LineChart
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 90,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
          dataKey="country"
          angle={-45}
          textAnchor="end"
          height={90}
          interval={0}
        />

        <YAxis tickFormatter={formatNumber} />

        <Tooltip
          formatter={(value) =>
            formatNumber(value)
          }
        />

        <Line
          type="monotone"
          dataKey="cases"
          stroke="#2563eb"
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default GlobalCasesChart;