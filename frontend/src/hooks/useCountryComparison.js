import { useEffect, useState } from "react";

import { getCountryByName } from "../services/covidApi";

function useCountryComparison(
  country1,
  country2
) {
  const [
    countryOneData,
    setCountryOneData,
  ] = useState(null);

  const [
    countryTwoData,
    setCountryTwoData,
  ] = useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState(null);

  useEffect(() => {
    async function fetchComparisonData() {
      if (!country1 || !country2) {
        setCountryOneData(null);
        setCountryTwoData(null);
        setError(null);
        return;
      }

      if (country1 === country2) {
        setCountryOneData(null);
        setCountryTwoData(null);
        setError(
          "Please select two different countries."
        );
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const [
          firstCountry,
          secondCountry,
        ] = await Promise.all([
          getCountryByName(country1),
          getCountryByName(country2),
        ]);

        setCountryOneData(firstCountry);
        setCountryTwoData(secondCountry);
      } catch (err) {
        console.error(
          "Comparison Error:",
          err
        );

        setError(
          "Failed to load comparison data."
        );

        setCountryOneData(null);
        setCountryTwoData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchComparisonData();
  }, [country1, country2]);

  return {
    countryOneData,
    countryTwoData,
    loading,
    error,
  };
}

export default useCountryComparison;