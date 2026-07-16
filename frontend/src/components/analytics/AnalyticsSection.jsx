function AnalyticsSection({ title, children }) {
  return (
    <section className="mb-14">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">
          {title}
        </h2>

        <div className="h-1 w-20 rounded-full bg-blue-600"></div>
      </div>

      {children}
    </section>
  );
}

export default AnalyticsSection;