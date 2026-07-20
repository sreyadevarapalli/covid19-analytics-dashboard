function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 px-8 py-12 text-white shadow-xl md:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-100">
            Data. Insights. Awareness.
          </p>

          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            Understand the global impact of COVID-19
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">
            Track global cases, recoveries, deaths, population
            impact, and country-level statistics through an
            interactive analytics dashboard.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;