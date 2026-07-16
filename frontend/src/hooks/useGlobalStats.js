import { useEffect, useState } from "react";
import { getGlobalStats } from "../services/covidApi";

function useGlobalStats() {

  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {

    async function fetchData() {

      try {
        const data = await getGlobalStats();
        setStats(data);

      } catch (err) {
        setError("Failed to load COVID-19 data.");

      } finally {
        setLoading(false);
      }

    }

    fetchData();

  }, []);


  return {
    stats,
    loading,
    error,
  };
}


export default useGlobalStats;