function EmptyState({
  title = "No Data Found",
  description = "There is no information available."
}) {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 p-12 text-center">
      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-gray-500">
        {description}
      </p>
    </div>
  );
}

export default EmptyState;