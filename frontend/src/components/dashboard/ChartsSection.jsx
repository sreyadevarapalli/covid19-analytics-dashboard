function ChartsSection() {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl font-bold">
        Analytics
      </h2>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex h-80 items-center justify-center rounded-2xl bg-white shadow-lg">
          📈 Cases Trend Chart
        </div>

        <div className="flex h-80 items-center justify-center rounded-2xl bg-white shadow-lg">
          📊 Death Trend Chart
        </div>
      </div>
    </section>
  );
}

export default ChartsSection;