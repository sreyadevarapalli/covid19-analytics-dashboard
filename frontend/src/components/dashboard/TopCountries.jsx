import SectionTitle from "../ui/SectionTitle";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import Card from "../ui/Card";
import useCountries from "../../hooks/useCountries";

function TopCountries() {
  const { countries, loading, error } = useCountries();

  if (loading) {
    return (
      <section className="mt-12">
        <Loader text="Loading countries..." />
      </section>
    );
  }

  if (error) {
    return (
      <section className="mt-12">
        <ErrorMessage message={error}/>
      </section>
    );
  }

  return (
    <section className="mt-16">
      <SectionTitle
            title="Top 10 Countries by Cases"
        />

      <div className="overflow-x-auto rounded-2xl bg-white shadow-lg">
        <table className="min-w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left">Rank</th>
              <th className="px-6 py-4 text-left">Country</th>
              <th className="px-6 py-4 text-right">Cases</th>
              <th className="px-6 py-4 text-right">Deaths</th>
              <th className="px-6 py-4 text-right">Recovered</th>
              <th className="px-6 py-4 text-right">Active</th>
            </tr>
          </thead>

          <tbody>
            {countries.map((country, index) => (
              <tr
                key={country.country}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4">{index + 1}</td>

                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src={country.countryInfo.flag}
                    alt={country.country}
                    className="h-6 w-8 rounded"
                  />
                  {country.country}
                </td>

                <td className="px-6 py-4 text-right">
                  {country.cases.toLocaleString()}
                </td>

                <td className="px-6 py-4 text-right">
                  {country.deaths.toLocaleString()}
                </td>

                <td className="px-6 py-4 text-right">
                  {country.recovered.toLocaleString()}
                </td>

                <td className="px-6 py-4 text-right">
                  {country.active.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TopCountries;