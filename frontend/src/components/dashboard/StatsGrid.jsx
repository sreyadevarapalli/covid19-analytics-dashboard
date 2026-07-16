import {
  FaGlobe,
  FaHeartbeat,
  FaSkullCrossbones,
  FaVirus,
} from "react-icons/fa";

import StatsCard from "./StatsCard";

function StatsGrid({ stats }) {
  const statsData = [
  {
    title: "Total Cases",
    value: stats?.cases.toLocaleString(),
    icon: <FaGlobe className="text-white text-3xl" />,
    color: "bg-blue-600",
  },

  {
    title: "Recovered",
    value: stats?.recovered.toLocaleString(),
    icon: <FaHeartbeat className="text-white text-3xl" />,
    color: "bg-green-600",
  },

  {
    title: "Deaths",
    value: stats?.deaths.toLocaleString(),
    icon: <FaSkullCrossbones className="text-white text-3xl" />,
    color: "bg-red-600",
  },

  {
    title: "Active",
    value: stats?.active.toLocaleString(),
    icon: <FaVirus className="text-white text-3xl" />,
    color: "bg-orange-500",
  },
];

  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-10 text-center text-4xl font-bold">
          Global Statistics
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((item) => (
            <StatsCard
              key={item.title}
              title={item.title}
              value={item.value}
              icon={item.icon}
              color={item.color}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default StatsGrid;