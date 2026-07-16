import StatCard from "./StatCard";

function CountryStats({ country }) {
  const stats = [
    {
      title: "Total Cases",
      value: country.cases.toLocaleString(),
      color: "text-blue-600",
    },
    {
      title: "Recovered",
      value: country.recovered.toLocaleString(),
      color: "text-green-600",
    },
    {
      title: "Deaths",
      value: country.deaths.toLocaleString(),
      color: "text-red-600",
    },
    {
      title: "Active Cases",
      value: country.active.toLocaleString(),
      color: "text-orange-600",
    },
    {
      title: "Critical Cases",
      value: country.critical.toLocaleString(),
      color: "text-purple-600",
    },
    {
      title: "Total Tests",
      value: country.tests.toLocaleString(),
      color: "text-indigo-600",
    },
    {
      title: "Today's Cases",
      value: country.todayCases.toLocaleString(),
      color: "text-cyan-600",
    },
    {
      title: "Today's Deaths",
      value: country.todayDeaths.toLocaleString(),
      color: "text-pink-600",
    },
    {
      title: "Today's Recovered",
      value: country.todayRecovered.toLocaleString(),
      color: "text-emerald-600",
    },
    {
      title: "Cases / Million",
      value: country.casesPerOneMillion.toLocaleString(),
      color: "text-sky-600",
    },
    {
      title: "Deaths / Million",
      value: country.deathsPerOneMillion.toLocaleString(),
      color: "text-rose-600",
    },
    {
      title: "Tests / Million",
      value: country.testsPerOneMillion.toLocaleString(),
      color: "text-violet-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          color={stat.color}
        />
      ))}
    </div>
  );
}

export default CountryStats;