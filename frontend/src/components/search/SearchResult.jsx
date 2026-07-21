import { Link } from "react-router-dom";

function SearchResult({
  country,
}) {
  return (
    <Link
      to={`/countries/${encodeURIComponent(
        country.country
      )}`}
      className="flex items-center gap-4 rounded-xl p-4 transition hover:bg-gray-100"
    >
      <img
        src={country.countryInfo.flag}
        alt={`${country.country} flag`}
        className="h-10 w-14 rounded object-cover"
      />

      <div>
        <h3 className="font-semibold text-gray-800">
          {country.country}
        </h3>

        <p className="text-sm text-gray-500">
          {country.continent}
        </p>
      </div>
    </Link>
  );
}

export default SearchResult;