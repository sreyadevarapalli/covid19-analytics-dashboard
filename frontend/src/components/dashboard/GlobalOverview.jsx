import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

function GlobalOverview({ stats }) {
  const overview = [
    {
      title: "Today's Cases",
      value: stats.todayCases.toLocaleString(),
    },
    {
      title: "Today's Recovered",
      value: stats.todayRecovered.toLocaleString(),
    },
    {
      title: "Critical Cases",
      value: stats.critical.toLocaleString(),
    },
    {
      title: "Total Tests",
      value: stats.tests.toLocaleString(),
    },
    {
      title: "Affected Countries",
      value: stats.affectedCountries.toLocaleString(),
    },
    {
      title: "World Population",
      value: stats.population.toLocaleString(),
    },
  ];

  return (
    <section className="mt-16">

      <SectionTitle
        title="Global Overview"
        subtitle="Additional COVID-19 statistics"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {overview.map((item) => (
          <Card key={item.title}>

            <h3 className="text-gray-500">
              {item.title}
            </h3>

            <p className="mt-3 text-3xl font-bold text-blue-700">
              {item.value}
            </p>

          </Card>
        ))}

      </div>

    </section>
  );
}

export default GlobalOverview;