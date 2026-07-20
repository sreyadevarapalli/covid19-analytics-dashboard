function DashboardHeader() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-10">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
          COVID-19 Analytics
        </p>

        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Global COVID-19 Dashboard
        </h1>

        <p className="mt-3 max-w-3xl text-gray-600">
          Explore global pandemic statistics, country-level
          trends, and data-driven insights.
        </p>
      </div>
    </section>
  );
}

export default DashboardHeader;