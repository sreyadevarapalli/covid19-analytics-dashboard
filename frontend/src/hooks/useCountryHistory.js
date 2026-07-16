import { useEffect, useState } from "react";
import { getCountryHistory } from "../services/covidApi";

function useCountryHistory(countryName) {
  const [history, setHistory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchHistory() {
      try {
        setLoading(true);

        const data = await getCountryHistory(countryName);

        setHistory(data);
      } catch (err) {
        setError("Unable to load historical data.");
      } finally {
        setLoading(false);
      }
    }

    if (countryName) {
      fetchHistory();
    }
  }, [countryName]);

  return {
    history,
    loading,
    error,
  };
}

export default useCountryHistory;