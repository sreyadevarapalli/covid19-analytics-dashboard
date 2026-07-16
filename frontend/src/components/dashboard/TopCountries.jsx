import useCountries from "../../hooks/useCountries";

import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";


function TopCountries() {

  const {
    countries,
    loading,
    error
  } = useCountries();


  if (loading) {
    return (
      <Loader text="Loading countries..." />
    );
  }


  if (error) {
    return (
      <ErrorMessage message={error} />
    );
  }


  return (
    <section className="mt-16">

      <SectionTitle
        title="Top 10 Countries by Cases"
        subtitle="Countries with the highest reported COVID-19 cases"
      />


      <Card className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-blue-600 text-white">

            <tr>

              <th className="px-6 py-4 text-left">
                Rank
              </th>

              <th className="px-6 py-4 text-left">
                Country
              </th>

              <th className="px-6 py-4 text-right">
                Cases
              </th>

              <th className="px-6 py-4 text-right">
                Deaths
              </th>

              <th className="px-6 py-4 text-right">
                Recovered
              </th>

              <th className="px-6 py-4 text-right">
                Active
              </th>

            </tr>

          </thead>


          <tbody>

            {countries.map((country,index)=>(
              
              <tr
                key={country.country}
                className="border-b hover:bg-gray-50"
              >

                <td className="px-6 py-4">
                  {index + 1}
                </td>


                <td className="flex items-center gap-3 px-6 py-4">

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


      </Card>


    </section>
  );
}


export default TopCountries;