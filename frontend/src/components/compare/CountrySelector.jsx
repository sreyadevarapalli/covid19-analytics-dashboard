import { useMemo } from "react";
import useCountries from "../../hooks/useCountries";

function CountrySelector({
  label,
  value,
  onChange,
}) {
  const { countries, loading } = useCountries();

  const sortedCountries = useMemo(() => {
    return [...countries].sort((a, b) =>
      a.country.localeCompare(b.country)
    );
  }, [countries]);

  if (loading) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
        <p className="text-center text-gray-500">
          Loading countries...
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <label
        htmlFor={label}
        className="mb-3 block text-lg font-semibold text-gray-700"
      >
        {label}
      </label>

      <select
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm transition-all duration-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
      >
        <option value="">🌍 Select a Country</option>

        {sortedCountries.map((country) => (
          <option
            key={country.country}
            value={country.country}
          >
            {country.country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CountrySelector;