function CountryHero({ country }) {
  if (!country) {
    return null;
  }

  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-xl md:p-12">
      <div className="flex flex-col items-center gap-8 md:flex-row">
        {/* Country Flag */}
        <div className="flex-shrink-0">
          {country.countryInfo?.flag ? (
            <img
              src={country.countryInfo.flag}
              alt={`${country.country} flag`}
              className="h-32 w-48 rounded-xl object-cover shadow-lg"
            />
          ) : (
            <div className="flex h-32 w-48 items-center justify-center rounded-xl bg-white/20">
              No Flag
            </div>
          )}
        </div>

        {/* Country Information */}
        <div className="text-center md:text-left">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-blue-200">
            Country Details
          </p>

          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {country.country || "Unknown Country"}
          </h1>

          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            {country.countryInfo?.iso2 && (
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
                Code: {country.countryInfo.iso2}
              </span>
            )}

            {country.continent && (
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
                {country.continent}
              </span>
            )}

            {country.population !== undefined && (
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
                Population:{" "}
                {Number(country.population).toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryHero;