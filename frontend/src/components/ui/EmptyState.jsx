import { FaSearch } from "react-icons/fa";

function EmptyState({
  title = "No Data Found",
  description = "Try another search.",
}) {
  return (
    <div className="rounded-2xl bg-gray-100 py-16 text-center">
      <FaSearch className="mx-auto text-5xl text-gray-400" />

      <h3 className="mt-5 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-2 text-gray-500">
        {description}
      </p>
    </div>
  );
}

export default EmptyState;