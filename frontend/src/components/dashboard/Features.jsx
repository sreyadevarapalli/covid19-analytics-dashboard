import {
  FaChartLine,
  FaGlobe,
  FaDatabase,
  FaChartPie,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      title: "Real-Time Statistics",
      description:
        "View the latest global COVID-19 statistics with an easy-to-understand interface.",
      icon: <FaChartLine className="text-5xl text-blue-600" />,
    },
    {
      title: "Country Analysis",
      description:
        "Explore COVID-19 data for individual countries and compare key metrics.",
      icon: <FaGlobe className="text-5xl text-green-600" />,
    },
    {
      title: "Interactive Charts",
      description:
        "Analyze trends using responsive charts and visualizations.",
      icon: <FaChartPie className="text-5xl text-orange-500" />,
    },
    {
      title: "Data Analytics",
      description:
        "Gain insights through Python-powered data analysis and reporting.",
      icon: <FaDatabase className="text-5xl text-purple-600" />,
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Why Choose COVID Analytics Dashboard?
        </h2>

        <p className="mt-4 text-center text-gray-600">
          A complete platform to explore, analyze, and visualize COVID-19 data.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-slate-50 p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;