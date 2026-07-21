import { useNavigate } from "react-router-dom";

import Card from "../ui/Card";

function CountryCard({ country }) {
  const navigate = useNavigate();

  const countryName =
    country.country_name ||
    country.country ||
    "Unknown Country";

  const countryCode =
    country.country_code ||
    country.iso2 ||
    country.iso3 ||
    "";

  const flagCode =
    countryCode
      .toLowerCase()
      .slice(0, 2);

  return (
    <Card
      onClick={() =>
        navigate(
          `/countries/${encodeURIComponent(
            countryName
          )}`
        )
      }
      className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex items-center gap-4">
        {flagCode ? (
          <img
            src={`https://flagcdn.com/w320/${flagCode}.png`}
            alt={`${countryName} flag`}
            className="h-12 w-16 rounded object-cover"
          />
        ) : (
          <div className="flex h-12 w-16 items-center justify-center rounded bg-gray-200 text-xs text-gray-500">
            No Flag
          </div>
        )}

        <div>
          <h3 className="text-xl font-bold">
            {countryName}
          </h3>

          <p className="text-gray-500">
            Population:{" "}
            {Number(
              country.population || 0
            ).toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between">
          <span>Total Cases</span>

          <span className="font-semibold">
            {Number(
              country.cases || 0
            ).toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Recovered</span>

          <span className="font-semibold text-green-600">
            {Number(
              country.recovered || 0
            ).toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Deaths</span>

          <span className="font-semibold text-red-600">
            {Number(
              country.deaths || 0
            ).toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Active</span>

          <span className="font-semibold text-orange-600">
            {Number(
              country.active || 0
            ).toLocaleString()}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default CountryCard;