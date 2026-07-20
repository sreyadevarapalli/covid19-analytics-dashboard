import Card from "../ui/Card";
import { formatNumber } from "../../utils/formatNumber";

function ComparisonCard({
  countryData,
  compareWith,
}) {
  if (!countryData) {
    return (
      <Card className="flex h-full items-center justify-center p-10">
        <p className="text-lg text-gray-500">
          Select a country
        </p>
      </Card>
    );
  }

  const stats = [
    {
      label: "Population",
      key: "population",
      color: "text-slate-700",
    },
    {
      label: "Total Cases",
      key: "cases",
      color: "text-blue-600",
    },
    {
      label: "Recovered",
      key: "recovered",
      color: "text-green-600",
    },
    {
      label: "Deaths",
      key: "deaths",
      color: "text-red-600",
    },
    {
      label: "Active",
      key: "active",
      color: "text-orange-600",
    },
    {
      label: "Critical",
      key: "critical",
      color: "text-purple-600",
    },
    {
      label: "Tests",
      key: "tests",
      color: "text-cyan-600",
    },
  ];

  return (
    <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}
      <div className="mb-6 flex items-center gap-4 border-b pb-5">
        <img
          src={countryData.countryInfo.flag}
          alt={countryData.country}
          className="h-12 w-16 rounded-md object-cover shadow"
        />

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {countryData.country}
          </h2>

          <p className="text-sm text-gray-500">
            {countryData.continent}
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="space-y-3">
        {stats.map((stat) => {
          const value = countryData[stat.key];
          const compareValue = compareWith
            ? compareWith[stat.key]
            : null;

          const isHigher =
            compareValue !== null && value > compareValue;

          const isLower =
            compareValue !== null && value < compareValue;

          return (
            <div
              key={stat.key}
              className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 transition hover:bg-gray-100"
            >
              <span className="font-medium text-gray-600">
                {stat.label}
              </span>

              <div className="flex items-center gap-2">
                <span className={`font-bold ${stat.color}`}>
                  {formatNumber(value)}
                </span>

                {compareWith && (
                  <>
                    {isHigher && (
                      <span
                        className="text-green-600"
                        title="Higher"
                      >
                        ▲
                      </span>
                    )}

                    {isLower && (
                      <span
                        className="text-red-600"
                        title="Lower"
                      >
                        ▼
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default ComparisonCard;