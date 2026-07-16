import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Card from "../ui/Card";

function LineChartHistory({ history }) {
  const [metric, setMetric] = useState("cases");

  const chartData = useMemo(() => {
    if (!history) return [];

    const timeline = history.timeline[metric];

    return Object.entries(timeline).map(([date, value]) => ({
      date,
      value,
    }));
  }, [history, metric]);

  const chartColor = {
    cases: "#2563eb",
    deaths: "#dc2626",
    recovered: "#16a34a",
  };

  const chartTitle = {
    cases: "COVID-19 Cases",
    deaths: "COVID-19 Deaths",
    recovered: "COVID-19 Recoveries",
  };

  return (
    <Card className="mt-10">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold">
          {chartTitle[metric]} (Last 90 Days)
        </h2>

        <select
          value={metric}
          onChange={(e) => setMetric(e.target.value)}
          className="rounded-lg border px-4 py-2"
        >
          <option value="cases">Cases</option>
          <option value="deaths">Deaths</option>
          <option value="recovered">Recovered</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={420}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Line
                type="monotone"
                dataKey="value"
                stroke={chartColor[metric]}
                strokeWidth={4}
                dot={false}
                activeDot={{ r: 6 }}
            />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default LineChartHistory;