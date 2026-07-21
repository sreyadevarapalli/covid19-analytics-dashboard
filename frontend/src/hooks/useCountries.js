import { useEffect, useState } from "react";

import { getCountries } from "../services/covidApi";

function useCountries() {
  const [countries, setCountries] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function fetchCountries() {
      try {
        setLoading(true);
        setError("");

        const response =
          await getCountries();

        const countryList =
          Array.isArray(response)
            ? response
            : response.data || [];

        setCountries(countryList);
      } catch (err) {
        console.error(
          "Countries Error:",
          err
        );

        setError(
          "Unable to load countries."
        );

        setCountries([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  return {
    countries,
    loading,
    error,
  };
}

export default useCountries;