import { useMemo } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import useCountries from "../../hooks/useCountries";
import { formatNumber } from "../../utils/formatNumber";

function ActiveCasesAreaChart() {
  const { countries, loading } = useCountries();

  const chartData = useMemo(() => {
    return [...countries]
      .sort((a, b) => b.active - a.active)
      .slice(0, 30)
      .map((country) => ({
        country: country.country,
        active: country.active,
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
      <AreaChart data={chartData}>
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

        <Area
          type="monotone"
          dataKey="active"
          stroke="#f97316"
          fill="#fdba74"
          strokeWidth={3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default ActiveCasesAreaChart;