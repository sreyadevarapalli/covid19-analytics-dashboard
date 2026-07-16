import Card from "../ui/Card";

function StatCard({
  title,
  value,
  color = "text-blue-600",
}) {
  return (
    <Card className="h-full">
      <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
        {title}
      </p>

      <h2 className={`mt-4 text-3xl font-bold ${color}`}>
        {value}
      </h2>
    </Card>
  );
}

export default StatCard;