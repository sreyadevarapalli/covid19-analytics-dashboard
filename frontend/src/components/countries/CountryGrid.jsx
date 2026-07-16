import CountryCard from "./CountryCard";

function CountryGrid({ countries }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country) => (
        <CountryCard
          key={country.country}
          country={country}
        />
      ))}
    </div>
  );
}

export default CountryGrid;