function CountryHero({
  country,
}) {
  if (!country) {
    return null;
  }

  const countryName =
    country.country_name ||
    country.country ||
    "Unknown Country";

  const countryCode =
    country.country_code ||
    country.iso2 ||
    "";

  const flagCode =
    countryCode
      .toLowerCase()
      .slice(0, 2);

  return (
    <section className="rounded-2xl bg-white p-8 shadow-lg">
      <div className="flex flex-col items-center gap-6 md:flex-row">

        {flagCode ? (
          <img
            src={`https://flagcdn.com/w320/${flagCode}.png`}
            alt={`${countryName} flag`}
            className="h-32 w-48 rounded-xl object-cover shadow"
          />
        ) : (
          <div className="flex h-32 w-48 items-center justify-center rounded-xl bg-gray-200 text-gray-500">
            No Flag Available
          </div>
        )}

        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            {countryName}
          </h1>

          <p className="mt-2 text-lg text-gray-500">
            {country.continent ||
              "Unknown region"}
          </p>
        </div>

      </div>
    </section>
  );
}

export default CountryHero;