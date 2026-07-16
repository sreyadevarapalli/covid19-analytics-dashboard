import { FaArrowUp } from "react-icons/fa";

function StatsCard({ title, value, icon, color }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex items-center justify-between">

        <div>
          <h3 className="text-gray-500">
            {title}
          </h3>

          <h2 className="mt-3 text-3xl font-bold">
            {value}
          </h2>

          <div className="mt-4 flex items-center gap-2 text-green-600">
            <FaArrowUp />

            <span>2.4%</span>
          </div>
        </div>

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full ${color}`}
        >
          {icon}
        </div>

      </div>
    </div>
  );
}

export default StatsCard;