import SectionTitle from "../ui/SectionTitle";
import GlobalBarChart from "../charts/GlobalBarChart";

function ChartsSection({ stats }) {
  return (
    <section className="mt-16">

        <SectionTitle
            title="Analytics"
            subtitle="Visual representation of global COVID data"
        />
      <GlobalBarChart stats={stats} />
    </section>
  );
}

export default ChartsSection;