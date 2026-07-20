import StatsGrid from "./StatsGrid";

function DashBoardStats({ stats }) {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Global Statistics
        </h2>

        <p className="mt-2 text-gray-600">
          Key COVID-19 statistics from around the world.
        </p>
      </div>

      <StatsGrid stats={stats} />
    </section>
  );
}

export default DashBoardStats;