function ChartContainer({ title, children }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <h3 className="mb-6 text-xl font-bold text-gray-800">
        {title}
      </h3>

      <div className="min-h-[400px]">
        {children}
      </div>
    </div>
  );
}

export default ChartContainer;