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
  const { countries, loading } = useCountries();

  const chartData = useMemo(() => {
    return [...countries]
      .sort((a, b) => b.cases - a.cases)
      .slice(0, 10)
      .map((country) => ({
        name: country.country,
        value: country.cases,
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
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(1)}%`
          }
        >
          {chartData.map((entry, index) => (
            <Cell
              key={entry.name}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip
          formatter={(value) => formatNumber(value)}
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