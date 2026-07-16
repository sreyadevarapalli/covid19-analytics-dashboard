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
  const { countries, loading } = useCountries();

  const chartData = useMemo(() => {
    return [...countries]
      .sort((a, b) => b.cases - a.cases)
      .slice(0, 30)
      .map((country) => ({
        country: country.country,
        cases: country.cases,
      }));
  }, [countries]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center text-gray-500">
        Loading chart...
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={380}>
      <LineChart data={chartData}>
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
          formatter={(value) => formatNumber(value)}
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