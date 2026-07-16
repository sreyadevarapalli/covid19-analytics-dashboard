import Card from "../ui/Card";
import useGlobalStats from "../../hooks/useGlobalStats";

function GlobalInsights() {
  const { stats, loading } = useGlobalStats();

  if (loading) {
    return (
      <div className="flex h-40 items-center justify-center text-gray-500">
        Loading insights...
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="flex h-40 items-center justify-center text-red-500">
        Unable to load global insights.
      </div>
    );
  }

  const recoveryRate = ((stats.recovered / stats.cases) * 100).toFixed(2);

  const mortalityRate = ((stats.deaths / stats.cases) * 100).toFixed(2);

  const activeRate = ((stats.active / stats.cases) * 100).toFixed(2);

  const testsPerCase = (stats.tests / stats.cases).toFixed(2);

  const insights = [
    {
      title: "Recovery Rate",
      value: `${recoveryRate}%`,
      color: "text-green-600",
      bg: "bg-green-50",
      icon: "💚",
    },
    {
      title: "Mortality Rate",
      value: `${mortalityRate}%`,
      color: "text-red-600",
      bg: "bg-red-50",
      icon: "💀",
    },
    {
      title: "Active Case Rate",
      value: `${activeRate}%`,
      color: "text-orange-600",
      bg: "bg-orange-50",
      icon: "🟠",
    },
    {
      title: "Tests Per Case",
      value: testsPerCase,
      color: "text-blue-600",
      bg: "bg-blue-50",
      icon: "🧪",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {insights.map((item) => (
        <Card
          key={item.title}
          className="text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full text-3xl ${item.bg}`}
          >
            {item.icon}
          </div>

          <h3 className="text-lg font-semibold text-gray-700">
            {item.title}
          </h3>

          <p className={`mt-4 text-4xl font-bold ${item.color}`}>
            {item.value}
          </p>
        </Card>
      ))}
    </div>
  );
}

export default GlobalInsights;