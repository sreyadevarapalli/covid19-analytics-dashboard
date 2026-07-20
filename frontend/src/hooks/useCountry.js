import { useEffect, useState } from "react";
import { getCountryByName } from "../services/covidApi";

function useCountry(countryName) {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCountry() {
      try {
        setLoading(true);
        setError("");

        const data = await getCountryByName(countryName);

        setCountry(data);
      } catch (err) {
        setError("Unable to load country data.");
        setCountry(null);
      } finally {
        setLoading(false);
      }
    }

    if (countryName) {
      fetchCountry();
    }
  }, [countryName]);

  return {
    countryData: country,
    country,
    loading,
    error,
  };
}

export default useCountry;