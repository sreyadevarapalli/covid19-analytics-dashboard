import Card from "../ui/Card";

function GlobalInsights({
  overview = null,
}) {
  if (!overview) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <p className="text-gray-500">
          Unable to load global insights.
        </p>
      </div>
    );
  }

  const cases =
    Number(overview.total_cases) || 0;

  const deaths =
    Number(overview.total_deaths) || 0;

  const recovered =
    Number(overview.total_recovered) || 0;

  const active =
    Number(overview.active_cases) || 0;

  const tests =
    Number(overview.total_tests) || 0;

  const recoveryRate =
    cases > 0
      ? ((recovered / cases) * 100).toFixed(2)
      : "0.00";

  const mortalityRate =
    cases > 0
      ? ((deaths / cases) * 100).toFixed(2)
      : "0.00";

  const activeRate =
    cases > 0
      ? ((active / cases) * 100).toFixed(2)
      : "0.00";

  const testsPerCase =
    cases > 0
      ? (tests / cases).toFixed(2)
      : "0.00";

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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {insights.map((item) => (
        <Card
          key={item.title}
          className="text-center"
        >
          <div
            className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full text-3xl ${item.bg}`}
          >
            {item.icon}
          </div>

          <h3 className="text-lg font-semibold text-gray-700">
            {item.title}
          </h3>

          <p
            className={`mt-4 text-4xl font-bold ${item.color}`}
          >
            {item.value}
          </p>
        </Card>
      ))}
    </div>
  );
}

export default GlobalInsights;