import Card from "../ui/Card";

import { formatNumber } from "../../utils/formatNumber";

function GlobalOverview({ stats }) {
  const overviewItems = [
    {
      label: "Total Cases",
      value: stats?.cases,
    },
    {
      label: "Total Deaths",
      value: stats?.deaths,
    },
    {
      label: "Recovered",
      value: stats?.recovered,
    },
    {
      label: "Active Cases",
      value: stats?.active,
    },
    {
      label: "Affected Countries",
      value: stats?.affectedCountries,
    },
  ];

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Global Overview
        </h2>

        <p className="mt-2 text-gray-600">
          A quick overview of the current global situation.
        </p>
      </div>

      <Card>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {overviewItems.map((item) => (
            <div
              key={item.label}
              className="rounded-xl bg-gray-50 p-5"
            >
              <p className="text-sm text-gray-500">
                {item.label}
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-900">
                {formatNumber(item.value)}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

export default GlobalOverview;