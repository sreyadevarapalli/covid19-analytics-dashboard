function EmptyState({
  title = "No Data Found",
  message = "There is no data to display.",
}) {
  return (
    <div className="rounded-2xl bg-white p-10 text-center shadow-md">
      <div className="mb-4 text-5xl">
        🔍
      </div>

      <h3 className="mb-2 text-xl font-semibold text-gray-800">
        {title}
      </h3>

      <p className="text-gray-500">
        {message}
      </p>
    </div>
  );
}

export default EmptyState;