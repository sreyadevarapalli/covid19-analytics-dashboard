import { Link } from "react-router-dom";
import { formatNumber } from "../../utils/formatNumber";

function SearchResult({
  country,
  onSelect,
  isSelected = false,
}) {
  return (
    <Link
      to={`/countries/${country.country}`}
      onClick={onSelect}
      className={`flex items-center justify-between border-b border-gray-100 px-4 py-3 transition-all duration-200 ${
        isSelected
          ? "bg-blue-100"
          : "hover:bg-blue-50"
      }`}
    >
      <div className="flex items-center gap-4">
        <img
          src={country.countryInfo.flag}
          alt={country.country}
          className="h-10 w-14 rounded object-cover shadow-sm"
        />

        <div>
          <h3 className="font-semibold text-gray-800">
            {country.country}
          </h3>

          <p className="text-sm text-gray-500">
            {country.continent}
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-xs text-gray-500">
          Cases
        </p>

        <p className="font-semibold text-blue-600">
          {formatNumber(country.cases)}
        </p>
      </div>
    </Link>
  );
}

export default SearchResult;