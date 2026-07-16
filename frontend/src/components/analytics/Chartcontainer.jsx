import Card from "../ui/Card";

function ChartContainer({ title, children }) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-2xl">
      <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {title}
        </h3>

        <div className="h-2 w-2 rounded-full bg-green-500"></div>
      </div>

      <div className="min-h-[380px]">
        {children}
      </div>
    </Card>
  );
}

export default ChartContainer;