import { Link } from "react-router-dom";

function CountryHero({ country }) {
  return (
    <div className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-6">
          <img
            src={country.countryInfo.flag}
            alt={country.country}
            className="h-24 w-36 rounded-lg object-cover shadow"
          />

          <div>
            <h1 className="text-5xl font-bold">
              {country.country}
            </h1>

            <p className="mt-2 text-lg text-blue-100">
              {country.continent}
            </p>

            <p className="mt-1 text-blue-200">
              Population: {country.population.toLocaleString()}
            </p>
          </div>
        </div>

        <Link
          to="/countries"
          className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-100"
        >
          ← Back
        </Link>
      </div>
    </div>
  );
}

export default CountryHero;