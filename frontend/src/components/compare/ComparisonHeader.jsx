function ComparisonHeader() {
  return (
    <div className="mb-10 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-8 text-white shadow-xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            🌍 Compare Countries
          </h1>

          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-emerald-100">
            Compare COVID-19 statistics between any two countries. Analyze
            confirmed cases, recoveries, deaths, active cases, critical cases,
            testing, and population side by side with a clean, interactive
            interface.
          </p>
        </div>

        <div className="rounded-2xl bg-white/15 px-6 py-5 text-center backdrop-blur-sm">
          <p className="text-sm uppercase tracking-wider text-emerald-100">
            Comparison Mode
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Country vs Country
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ComparisonHeader;