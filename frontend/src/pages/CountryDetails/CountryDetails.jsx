import Breadcrumb from "../../components/ui/Breadcrumb";
import EmptyState from "../../components/ui/EmptyState";
import LineChartHistory from "../../components/charts/LineChartHistory";
import useCountryHistory from "../../hooks/useCountryHistory";
import CountryStats from "../../components/countryDetails/CountryStats";
import CountryHero from "../../components/countryDetails/CountryHero";
import { useParams } from "react-router-dom";

import Layout from "../../components/layout/Layout";

import Loader from "../../components/ui/Loader";
import ErrorMessage from "../../components/ui/ErrorMessage";

import useCountry from "../../hooks/useCountry";

function CountryDetails() {
  const { countryName } = useParams();

  const { country, loading, error } = useCountry(countryName);
  const {
  history,
  loading: historyLoading,
  error: historyError,
} = useCountryHistory(countryName);

  if (loading) {
    return (
      <Layout>
        <Loader text="Loading country..." />
      </Layout>
    );
  }

  if (error || !country) {
    return (
  <Layout>
    <div className="mx-auto min-h-screen max-w-7xl bg-gray-50 px-6 py-10">

      <Breadcrumb countryName={countryName} />

      <EmptyState
        title="Country Not Found"
        description="We couldn't find COVID-19 data for this country."
      />

    </div>
  </Layout>
);
  }

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <Breadcrumb countryName={country.country} />

        <CountryHero country={country} />

        <CountryStats country={country} />
        {history && <LineChartHistory history={history} />}

      </div>
    </Layout>
  );
}

export default CountryDetails;