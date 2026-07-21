import Layout from "../../components/layout/Layout";

function About() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            About COVID-19 Analytics Dashboard
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            An interactive data analytics platform designed to visualize
            global COVID-19 statistics and provide meaningful insights
            through charts, comparisons, and country-level analysis.
          </p>
        </div>

        {/* Project Overview */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            📊 Project Overview
          </h2>

          <p className="leading-7 text-gray-600">
            The COVID-19 Analytics Dashboard collects and visualizes
            worldwide COVID-19 statistics. Users can explore global
            statistics, analyze individual countries, compare countries,
            and understand trends through interactive visualizations.
          </p>
        </section>

        {/* Features */}
        <section className="mb-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            🚀 Key Features
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="mb-3 text-xl font-bold text-blue-600">
                🌍 Global Dashboard
              </h3>

              <p className="text-gray-600">
                View global COVID-19 statistics including total cases,
                deaths, recoveries, active cases, and affected countries.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="mb-3 text-xl font-bold text-green-600">
                🗺️ Country Analysis
              </h3>

              <p className="text-gray-600">
                Search, filter, sort, and explore detailed COVID-19
                statistics for individual countries.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="mb-3 text-xl font-bold text-purple-600">
                📈 Data Analytics
              </h3>

              <p className="text-gray-600">
                Analyze cases, active cases, deaths, continent-level
                statistics, and global recovery insights.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="mb-3 text-xl font-bold text-orange-600">
                ⚖️ Country Comparison
              </h3>

              <p className="text-gray-600">
                Compare two countries side by side using statistics and
                interactive visualizations.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="mb-3 text-xl font-bold text-red-600">
                🔍 Advanced Filtering
              </h3>

              <p className="text-gray-600">
                Filter countries based on region, population, case count,
                and other statistics.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="mb-3 text-xl font-bold text-cyan-600">
                📊 Interactive Charts
              </h3>

              <p className="text-gray-600">
                Explore data using line charts, area charts, pie charts,
                and bar charts.
              </p>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-10 rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            🛠️ Technologies Used
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Vite",
              "JavaScript",
              "Tailwind CSS",
              "Recharts",
              "Node.js",
              "Express.js",
              "MySQL",
              "REST API",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-700"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Data Source */}
        <section className="mb-10 rounded-2xl bg-gray-50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            🦠 Data Source
          </h2>

          <p className="text-gray-600">
            The dashboard uses COVID-19 statistical data provided through
            the disease.sh API.
          </p>
        </section>

        {/* Developer */}
        <section className="rounded-2xl bg-white p-8 text-center shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            👩‍💻 Developed By
          </h2>

          <p className="text-xl font-semibold text-blue-600">
            Sreya Devarapalli
          </p>

          <p className="mt-2 text-gray-600">
            Computer Science & Engineering Graduate
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://github.com/sreyadevarapalli"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-gray-900 px-5 py-2 font-medium text-white transition hover:bg-gray-700"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sreya-devarapalli-6b1884238/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default About;