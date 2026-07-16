import { useEffect, useState } from "react";
import { getCountries } from "../services/covidApi";

function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCountries() {
      try {
        const data = await getCountries();

        const sorted = data
          .sort((a, b) => b.cases - a.cases)
          .slice(0, 10);

        setCountries(sorted);
      } catch (err) {
        setError("Unable to load countries.");
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  return { countries, loading, error };
}

export default useCountries;