import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../../components/layout/Layout";

import CountryHero from "../../components/countryDetails/CountryHero";
import CountryOverview from "../../components/countryDetails/CountryOverview";
import CountryStats from "../../components/countryDetails/CountryStats";

import { getCountryByName } from "../../services/covidApi";

function CountryDetails() {
const { countryName } = useParams();

const [country, setCountry] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
async function fetchCountry() {
try {
setLoading(true);
setError(null);

    const data = await getCountryByName(countryName);

    setCountry(data);
  } catch (err) {
    console.error("Country details error:", err);

    setError("Unable to load country details.");
    setCountry(null);
  } finally {
    setLoading(false);
  }
}

if (countryName) {
  fetchCountry();
}

}, [countryName]);

if (loading) {
return (
<Layout>
<div className="flex min-h-[60vh] items-center justify-center">
<div className="text-center">
<div className="mb-4 text-5xl">🌍</div>

        <h2 className="text-2xl font-bold text-gray-700">
          Loading Country Details...
        </h2>

        <p className="mt-2 text-gray-500">
          Fetching the latest COVID-19 statistics.
        </p>
      </div>
    </div>
  </Layout>
);

}

if (error || !country) {
return (
<Layout>
<div className="flex min-h-[60vh] items-center justify-center">
<div className="rounded-2xl bg-red-50 p-10 text-center shadow-lg">
<div className="mb-4 text-5xl">⚠️</div>

        <h2 className="text-2xl font-bold text-red-600">
          {error || "Country data not found"}
        </h2>

        <p className="mt-2 text-gray-600">
          Please try again or select another country.
        </p>
      </div>
    </div>
  </Layout>
);

}

return (
<Layout>
<div className="space-y-8">
<CountryHero country={country} />

    <CountryOverview country={country} />

    <CountryStats country={country} />
  </div>
</Layout>

);
}

export default CountryDetails;