import Card from "../ui/Card";

function CountryOverview({ country }) {
  if (!country) {
    return null;
  }

  const cases = Number(country.cases) || 0;
  const recovered = Number(country.recovered) || 0;
  const deaths = Number(country.deaths) || 0;
  const active = Number(country.active) || 0;
  const tests = Number(country.tests) || 0;

  const recoveryRate =
    cases > 0
      ? ((recovered / cases) * 100).toFixed(2)
      : "0.00";

  const deathRate =
    cases > 0
      ? ((deaths / cases) * 100).toFixed(2)
      : "0.00";

  const activeRate =
    cases > 0
      ? ((active / cases) * 100).toFixed(2)
      : "0.00";

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Country Overview
        </h2>

        <p className="mt-2 text-gray-600">
          Key insights into the COVID-19 situation in{" "}
          {country.country}.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Summary Card */}
        <Card>
          <h3 className="mb-6 text-xl font-bold text-gray-800">
            COVID-19 Summary
          </h3>

          <div className="space-y-5">
            <div className="flex items-center justify-between border-b pb-4">
              <span className="text-gray-600">
                Recovery Rate
              </span>

              <span className="font-bold text-green-600">
                {recoveryRate}%
              </span>
            </div>

            <div className="flex items-center justify-between border-b pb-4">
              <span className="text-gray-600">
                Death Rate
              </span>

              <span className="font-bold text-red-600">
                {deathRate}%
              </span>
            </div>

            <div className="flex items-center justify-between border-b pb-4">
              <span className="text-gray-600">
                Active Case Rate
              </span>

              <span className="font-bold text-orange-600">
                {activeRate}%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-600">
                Tests per Case
              </span>

              <span className="font-bold text-blue-600">
                {cases > 0
                  ? (tests / cases).toFixed(2)
                  : "0"}
              </span>
            </div>
          </div>
        </Card>

        {/* Country Information Card */}
        <Card>
          <h3 className="mb-6 text-xl font-bold text-gray-800">
            Country Information
          </h3>

          <div className="space-y-5">
            <div className="flex items-center justify-between border-b pb-4">
              <span className="text-gray-600">
                Country
              </span>

              <span className="font-semibold text-gray-900">
                {country.country || "N/A"}
              </span>
            </div>

            <div className="flex items-center justify-between border-b pb-4">
              <span className="text-gray-600">
                Continent
              </span>

              <span className="font-semibold text-gray-900">
                {country.continent || "N/A"}
              </span>
            </div>

            <div className="flex items-center justify-between border-b pb-4">
              <span className="text-gray-600">
                Population
              </span>

              <span className="font-semibold text-gray-900">
                {country.population
                  ? Number(
                      country.population
                    ).toLocaleString()
                  : "N/A"}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-600">
                Last Updated
              </span>

              <span className="font-semibold text-gray-900">
                {country.updated
                  ? new Date(
                      country.updated
                    ).toLocaleDateString()
                  : "N/A"}
              </span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default CountryOverview;