function DashboardHeader() {
  const today = new Date().toLocaleDateString();

  return (
    <section className="mb-10">
      <h1 className="text-4xl font-bold text-slate-800">
        Global Dashboard
      </h1>

      <p className="mt-2 text-gray-500">
        Last Updated: {today}
      </p>
    </section>
  );
}

export default DashboardHeader;