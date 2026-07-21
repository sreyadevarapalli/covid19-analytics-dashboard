import { Link } from "react-router-dom";

import Card from "../ui/Card";

import { formatNumber } from "../../utils/formatNumber";

function TopCountries({ countries = [] }) {
  const topCountries = [...countries]
    .sort(
      (a, b) =>
        (Number(b.cases) || 0) -
        (Number(a.cases) || 0)
    )
    .slice(0, 5);

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Top Countries
          </h2>

          <p className="mt-2 text-gray-600">
            Countries with the highest number of cases.
          </p>
        </div>

        <Link
          to="/countries"
          className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 sm:block"
        >
          View All
        </Link>
      </div>

      <Card>
        <div className="space-y-4">
          {topCountries.map((country, index) => (
            <div
              key={`${country.country_name}-${index}`}
              className="flex items-center justify-between rounded-xl bg-gray-50 p-4 transition hover:bg-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {country.country_name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {country.continent ||
                      "Unknown region"}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold text-gray-900">
                  {formatNumber(country.cases)}
                </p>

                <p className="text-xs text-gray-500">
                  Cases
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

export default TopCountries;