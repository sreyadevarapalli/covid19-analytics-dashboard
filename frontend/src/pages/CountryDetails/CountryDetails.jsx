import { useParams, Link } from "react-router-dom";

import Layout from "../../components/layout/Layout";

import CountryHero from "../../components/countrydetails/CountryHero";
import CountryOverview from "../../components/countrydetails/CountryOverview";
import CountryStats from "../../components/countrydetails/CountryStats";

import Loader from "../../components/ui/Loader";
import ErrorMessage from "../../components/ui/ErrorMessage";

import useCountry from "../../hooks/useCountry";

function CountryDetails() {
const { country } = useParams();

const {
countryData,
loading,
error,
} = useCountry(country);

return ( <Layout> <div className="min-h-screen bg-gray-50">
{/* Back Navigation */} <div className="mx-auto max-w-7xl px-6 pt-8"> <Link
         to="/countries"
         className="inline-flex items-center gap-2 font-medium text-blue-600 transition hover:text-blue-800"
       >
← Back to Countries </Link> </div>

```
    {/* Loading State */}
    {loading && (
      <Loader message="Loading country details..." />
    )}

    {/* Error State */}
    {error && (
      <div className="mx-auto max-w-7xl px-6 py-10">
        <ErrorMessage message={error} />

        <div className="mt-6 text-center">
          <Link
            to="/countries"
            className="inline-block rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Return to Countries
          </Link>
        </div>
      </div>
    )}

    {/* Country Details Content */}
    {!loading && !error && countryData && (
      <main className="mx-auto max-w-7xl space-y-10 px-6 py-10">
        <CountryHero country={countryData} />

        <CountryStats country={countryData} />

        <CountryOverview country={countryData} />
      </main>
    )}
  </div>
</Layout>


);
}

export default CountryDetails;
