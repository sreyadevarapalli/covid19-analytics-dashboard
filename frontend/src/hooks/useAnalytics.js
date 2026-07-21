import { useEffect, useState } from "react";

import {
  getAnalyticsOverview,
  getTopCountriesAnalytics,
  getContinentAnalytics,
} from "../services/covidApi";

function useAnalytics() {
  const [overview, setOverview] =
    useState(null);

  const [topCountries, setTopCountries] =
    useState([]);

  const [continents, setContinents] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        setLoading(true);
        setError("");

        const [
          overviewResponse,
          topCountriesResponse,
          continentsResponse,
        ] = await Promise.all([
          getAnalyticsOverview(),
          getTopCountriesAnalytics(),
          getContinentAnalytics(),
        ]);

        setOverview(overviewResponse.data);

        setTopCountries(
          topCountriesResponse.data
        );

        setContinents(
          continentsResponse.data
        );
      } catch (err) {
        console.error(err);

        setError(
          "Unable to load analytics data."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchAnalytics();
  }, []);

  return {
    overview,
    topCountries,
    continents,
    loading,
    error,
  };
}

export default useAnalytics;