import { formatNumber } from "../../utils/formatNumber";

function StatCard({ title, value, icon }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
          {icon}
        </div>
      </div>

      <p className="text-sm font-medium text-gray-500">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-gray-900">
        {formatNumber(value)}
      </h3>
    </div>
  );
}

export default StatCard;