import Layout from "../../components/layout/Layout";

function Dashboard() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold text-blue-700">
          Dashboard
        </h1>

        <p className="mt-4 text-gray-600">
          Global COVID-19 statistics will appear here.
        </p>
      </div>
    </Layout>
  );
}

export default Dashboard;