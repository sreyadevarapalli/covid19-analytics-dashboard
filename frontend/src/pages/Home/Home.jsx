import Layout from "../../components/layout/Layout";

function Home() {
  return (
    <Layout>
      <section className="flex min-h-[80vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-700">
            COVID-19 Analytics Dashboard
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Explore global COVID-19 statistics, trends, and insights through interactive visualizations.
          </p>

          <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
            Explore Dashboard
          </button>
        </div>
      </section>
    </Layout>
  );
}

export default Home;