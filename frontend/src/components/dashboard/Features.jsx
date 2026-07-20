function Features() {
  const features = [
    {
      icon: "🌍",
      title: "Global Tracking",
      description:
        "Monitor COVID-19 statistics from countries around the world.",
    },
    {
      icon: "📊",
      title: "Interactive Analytics",
      description:
        "Explore data through charts, graphs, and meaningful comparisons.",
    },
    {
      icon: "🔎",
      title: "Country Insights",
      description:
        "Search and analyze detailed country-level COVID-19 data.",
    },
    {
      icon: "⚖️",
      title: "Country Comparison",
      description:
        "Compare statistics between two countries side by side.",
    },
  ];

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Explore the Dashboard
        </h2>

        <p className="mt-2 text-gray-600">
          Use the available tools to explore COVID-19 data.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-4 text-4xl">
              {feature.icon}
            </div>

            <h3 className="text-lg font-bold text-gray-900">
              {feature.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;