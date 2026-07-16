import { useMemo } from "react";
import Card from "../ui/Card";
import useCountries from "../../hooks/useCountries";
import { formatNumber } from "../../utils/formatNumber";

function ContinentAnalysis() {
  const { countries, loading } = useCountries();

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
      grouped[continent].cases += country.cases;
      grouped[continent].recovered += country.recovered;
      grouped[continent].deaths += country.deaths;
      grouped[continent].active += country.active;
    });

    return Object.values(grouped).sort((a, b) => b.cases - a.cases);
  }, [countries]);

  if (loading) {
    return (
      <div className="flex h-40 items-center justify-center text-gray-500">
        Loading continent analysis...
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {continentData.map((continent) => (
        <Card
          key={continent.continent}
          className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              🌍 {continent.continent}
            </h2>

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