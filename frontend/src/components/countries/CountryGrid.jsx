import CountryCard from "./CountryCard";

function CountryGrid({
  countries = [],
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {countries.map((country, index) => (
        <CountryCard
          key={
            country.id ||
            country.country_name ||
            country.country ||
            index
          }
          country={country}
        />
      ))}
    </div>
  );
}

export default CountryGrid;