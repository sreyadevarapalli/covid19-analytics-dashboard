import Layout from "../../components/layout/Layout";
import Hero from "../../components/dashboard/Hero";
import StatsGrid from "../../components/dashboard/StatsGrid";
import Features from "../../components/dashboard/Features";

function Home() {
  return (
    <Layout>
      <Hero />
      <StatsGrid />
      <Features />
    </Layout>
  );
}

export default Home;