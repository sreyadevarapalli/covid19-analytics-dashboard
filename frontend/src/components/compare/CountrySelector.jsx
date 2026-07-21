import { useMemo } from "react";

function CountrySelector({
  label,
  value,
  onChange,
  countries = [],
  loading = false,
}) {
  const sortedCountries = useMemo(() => {
    return [...countries].sort((a, b) =>
      (
        a.country_name ||
        a.country ||
        ""
      ).localeCompare(
        b.country_name ||
        b.country ||
        ""
      )
    );
  }, [countries]);

  if (loading) {
    return (
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          {label}
        </label>

        <div className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-3">
          <p className="text-gray-500">
            Loading countries...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <label
        htmlFor={label}
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        {label}
      </label>

      <select
        id={label}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm transition-all duration-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
      >
        <option
          key={`${label}-placeholder`}
          value=""
        >
          🌍 Select a Country
        </option>

        {sortedCountries.map(
          (country, index) => {
            const countryName =
              country.country_name ||
              country.country ||
              "Unknown Country";

            const uniqueKey =
              country.id ||
              country.country_code ||
              `${countryName}-${index}`;

            return (
              <option
                key={uniqueKey}
                value={countryName}
              >
                {countryName}
              </option>
            );
          }
        )}
      </select>
    </div>
  );
}

export default CountrySelector;