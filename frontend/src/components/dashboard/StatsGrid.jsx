import StatsCard from "./StatsCard";

function StatsGrid({ stats }) {
  const statCards = [
    {
      title: "Total Cases",
      value: stats?.cases,
      icon: "🦠",
    },
    {
      title: "Total Deaths",
      value: stats?.deaths,
      icon: "⚠️",
    },
    {
      title: "Recovered",
      value: stats?.recovered,
      icon: "💚",
    },
    {
      title: "Active Cases",
      value: stats?.active,
      icon: "📊",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {statCards.map((stat) => (
        <StatsCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}

export default StatsGrid;