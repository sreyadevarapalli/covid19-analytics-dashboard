import { useMemo } from "react";

import Card from "../ui/Card";

import useCountries from "../../hooks/useCountries";
import { formatNumber } from "../../utils/formatNumber";

function ContinentAnalysis() {
  const {
    countries = [],
    loading,
    error,
  } = useCountries();

  const continentData = useMemo(() => {
    const grouped = {};

    countries.forEach((country) => {
      const continent = country.continent || "Unknown";

      if (!grouped[continent]) {
        grouped[continent] = {
          continent,
          countries: 0,
          cases: 0,
          recovered: 0,
          deaths: 0,
          active: 0,
        };
      }

      grouped[continent].countries += 1;

      grouped[continent].cases +=
        Number(country.cases) || 0;

      grouped[continent].recovered +=
        Number(country.recovered) || 0;

      grouped[continent].deaths +=
        Number(country.deaths) || 0;

      grouped[continent].active +=
        Number(country.active) || 0;
    });

    return Object.values(grouped).sort(
      (a, b) => b.cases - a.cases
    );
  }, [countries]);

  if (loading) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow">
        <p className="text-lg text-gray-500">
          Loading continent analysis...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl bg-red-50 p-8 text-center text-red-600">
        {error}
      </div>
    );
  }

  if (continentData.length === 0) {
    return (
      <div className="rounded-2xl bg-gray-50 p-8 text-center">
        <p className="text-gray-500">
          No continent data available.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {continentData.map((continent) => (
        <Card key={continent.continent}>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-800">
              🌍 {continent.continent}
            </h3>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              {continent.countries} Countries
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium text-gray-600">
                Total Cases
              </span>

              <span className="font-bold text-blue-600">
                {formatNumber(continent.cases)}
              </span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium text-gray-600">
                Recovered
              </span>

              <span className="font-bold text-green-600">
                {formatNumber(continent.recovered)}
              </span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium text-gray-600">
                Deaths
              </span>

              <span className="font-bold text-red-600">
                {formatNumber(continent.deaths)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-gray-600">
                Active Cases
              </span>

              <span className="font-bold text-orange-600">
                {formatNumber(continent.active)}
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default ContinentAnalysis;