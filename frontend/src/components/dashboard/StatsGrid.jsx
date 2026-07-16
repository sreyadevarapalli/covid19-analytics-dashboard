import {
  FaGlobe,
  FaHeartbeat,
  FaSkullCrossbones,
  FaVirus,
} from "react-icons/fa";

import StatsCard from "./StatsCard";

function StatsGrid() {
  const stats = [
    {
      title: "Total Cases",
      value: "789M",
      icon: <FaGlobe className="text-white text-3xl" />,
      color: "bg-blue-600",
    },

    {
      title: "Recovered",
      value: "760M",
      icon: <FaHeartbeat className="text-white text-3xl" />,
      color: "bg-green-600",
    },

    {
      title: "Deaths",
      value: "7M",
      icon: <FaSkullCrossbones className="text-white text-3xl" />,
      color: "bg-red-600",
    },

    {
      title: "Active",
      value: "22M",
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
          {stats.map((item) => (
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