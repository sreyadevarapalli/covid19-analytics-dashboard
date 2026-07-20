import Card from "../ui/Card";

function ComparisonSummary({ countryOneData, countryTwoData }) {
  if (!countryOneData || !countryTwoData) return null;

  const summary = [
    {
      title: "Countries",
      value: "2",
      color: "bg-blue-500",
    },
    {
      title: "Combined Cases",
      value: (
        countryOneData.cases + countryTwoData.cases
      ).toLocaleString(),
      color: "bg-red-500",
    },
    {
      title: "Combined Recoveries",
      value: (
        countryOneData.recovered + countryTwoData.recovered
      ).toLocaleString(),
      color: "bg-green-500",
    },
    {
      title: "Combined Deaths",
      value: (
        countryOneData.deaths + countryTwoData.deaths
      ).toLocaleString(),
      color: "bg-gray-700",
    },
  ];

  return (
    <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {summary.map((item) => (
        <Card key={item.title}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                {item.title}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {item.value}
              </h3>
            </div>

            <div
              className={`h-12 w-12 rounded-full ${item.color}`}
            />
          </div>
        </Card>
      ))}
    </div>
  );
}

export default ComparisonSummary;