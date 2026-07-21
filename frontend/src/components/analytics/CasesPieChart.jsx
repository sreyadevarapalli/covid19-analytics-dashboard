import { useMemo } from "react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import useCountries from "../../hooks/useCountries";
import { formatNumber } from "../../utils/formatNumber";

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#dc2626",
  "#ea580c",
  "#7c3aed",
  "#0891b2",
  "#db2777",
  "#65a30d",
  "#f59e0b",
  "#6b7280",
];

function CasesPieChart() {
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
      .slice(0, 10)
      .map((country) => ({
        name:
          country.country ||
          country.country_name ||
          "Unknown",

        value: Number(country.cases) || 0,
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
    <ResponsiveContainer width="100%" height={450}>
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="45%"
          outerRadius={120}
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(1)}%`
          }
        >
          {chartData.map((entry, index) => (
            <Cell
              key={`${entry.name}-${index}`}
              fill={
                COLORS[index % COLORS.length]
              }
            />
          ))}
        </Pie>

        <Tooltip
          formatter={(value) =>
            formatNumber(value)
          }
        />

        <Legend
          verticalAlign="bottom"
          height={36}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default CasesPieChart;