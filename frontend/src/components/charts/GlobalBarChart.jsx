import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function GlobalBarChart({ stats }) {
  const data = [
    {
      name: "Cases",
      value: stats.cases,
    },
    {
      name: "Recovered",
      value: stats.recovered,
    },
    {
      name: "Deaths",
      value: stats.deaths,
    },
    {
      name: "Active",
      value: stats.active,
    },
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold">
        Global COVID Statistics
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="value" fill="#2563eb" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GlobalBarChart;