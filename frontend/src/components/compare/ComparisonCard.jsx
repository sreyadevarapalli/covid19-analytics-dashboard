import Card from "../ui/Card";

import { formatNumber } from "../../utils/formatNumber";

function ComparisonCard({
  countryData,
  compareWith,
}) {
  if (!countryData) {
    return null;
  }

  const countryName =
    countryData.country || "Unknown Country";

  const flag =
    countryData.countryInfo?.flag || "";

  const cases =
    Number(countryData.cases) || 0;

  const deaths =
    Number(countryData.deaths) || 0;

  const recovered =
    Number(countryData.recovered) || 0;

  const active =
    Number(countryData.active) || 0;

  const population =
    Number(countryData.population) || 0;

  const stats = [
    {
      label: "Total Cases",
      value: cases,
      color: "text-blue-600",
    },
    {
      label: "Deaths",
      value: deaths,
      color: "text-red-600",
    },
    {
      label: "Recovered",
      value: recovered,
      color: "text-green-600",
    },
    {
      label: "Active Cases",
      value: active,
      color: "text-orange-600",
    },
    {
      label: "Population",
      value: population,
      color: "text-purple-600",
    },
  ];

  return (
    <Card>
      {/* Country Header */}
      <div className="mb-6 flex items-center gap-4">
        {flag ? (
          <img
            src={flag}
            alt={`${countryName} flag`}
            className="h-16 w-24 rounded-lg object-cover shadow"
          />
        ) : (
          <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-gray-200 text-sm text-gray-500">
            No Flag
          </div>
        )}

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {countryName}
          </h2>

          <p className="text-gray-500">
            {countryData.continent || "Unknown region"}
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="space-y-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center justify-between border-b pb-3"
          >
            <span className="font-medium text-gray-600">
              {stat.label}
            </span>

            <span
              className={`font-bold ${stat.color}`}
            >
              {formatNumber(stat.value)}
            </span>
          </div>
        ))}
      </div>

      {/* Comparison Indicator */}
      {compareWith && (
        <div className="mt-6 rounded-xl bg-gray-50 p-4 text-center">
          <p className="text-sm text-gray-500">
            Comparing with
          </p>

          <p className="font-semibold text-gray-800">
            {compareWith.country}
          </p>
        </div>
      )}
    </Card>
  );
}

export default ComparisonCard;