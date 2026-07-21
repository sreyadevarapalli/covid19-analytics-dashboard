import { useEffect, useState } from "react";

import { getGlobalStats } from "../services/covidApi";

function useGlobalStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchStats() {
      try {
        setLoading(true);
        setError("");

        const data = await getGlobalStats();

        setStats(data);
      } catch (err) {
        console.error("Global stats error:", err);

        setError(
          "Unable to load global statistics."
        );

        setStats(null);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return {
    stats,
    loading,
    error,
  };
}

export default useGlobalStats;