import StatCard from "./StatCard";

function CountryStats({ country }) {
  if (!country) {
    return null;
  }

  const stats = [
    {
      title: "Total Cases",
      value: country.cases,
      icon: "🦠",
    },
    {
      title: "Active Cases",
      value: country.active,
      icon: "⚠️",
    },
    {
      title: "Recovered",
      value: country.recovered,
      icon: "💚",
    },
    {
      title: "Deaths",
      value: country.deaths,
      icon: "🕊️",
    },
    {
      title: "Tests",
      value: country.tests,
      icon: "🧪",
    },
    {
      title: "Critical Cases",
      value: country.critical,
      icon: "🏥",
    },
  ];

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          COVID-19 Statistics
        </h2>

        <p className="mt-2 text-gray-600">
          Current COVID-19 statistics for {country.country}.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default CountryStats;