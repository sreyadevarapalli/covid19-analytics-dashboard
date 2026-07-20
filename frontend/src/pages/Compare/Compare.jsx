import { useState } from "react";

import Layout from "../../components/layout/Layout";
import ComparisonHeader from "../../components/compare/ComparisonHeader";
import ComparisonGrid from "../../components/compare/ComparisonGrid";
import CountrySelector from "../../components/compare/CountrySelector";
import ComparisonCard from "../../components/compare/ComparisonCard";
import CountryComparisonChart from "../../components/compare/CountryComparisonChart";
import ComparisonSummary from "../../components/compare/ComparisonSummary";

import useCountryComparison from "../../hooks/useCountryComparison";

function Compare() {
  const [country1, setCountry1] = useState("");
  const [country2, setCountry2] = useState("");

  const {
    countryOneData,
    countryTwoData,
    loading,
    error,
  } = useCountryComparison(country1, country2);

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <ComparisonHeader />

        {/* Country Selectors */}
        <div className="mb-10">
          <ComparisonGrid>
            <CountrySelector
              label="Country 1"
              value={country1}
              onChange={setCountry1}
            />

            <CountrySelector
              label="Country 2"
              value={country2}
              onChange={setCountry2}
            />
          </ComparisonGrid>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-8 rounded-xl border border-red-200 bg-red-50 p-4 text-center text-red-600">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="rounded-2xl bg-white p-12 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-gray-700">
              Loading Comparison...
            </h2>

            <p className="mt-2 text-gray-500">
              Fetching latest country statistics...
            </p>
          </div>
        )}

        {/* Initial State */}
        {!loading && !countryOneData && !countryTwoData && (
          <div className="rounded-2xl bg-gray-50 p-12 text-center shadow">
            <h2 className="mb-3 text-2xl font-bold text-gray-700">
              Compare Two Countries
            </h2>

            <p className="text-gray-500">
              Select two countries above to compare their COVID-19
              statistics side by side.
            </p>
          </div>
        )}

        {/* Comparison */}
        {!loading && countryOneData && countryTwoData && (
          <>
            <ComparisonSummary
              countryOneData={countryOneData}
              countryTwoData={countryTwoData}
            />

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
                Country Comparison
              </h2>

              <ComparisonGrid>
                <ComparisonCard
                  countryData={countryOneData}
                  compareWith={countryTwoData}
                />

                <ComparisonCard
                  countryData={countryTwoData}
                  compareWith={countryOneData}
                />
              </ComparisonGrid>
            </div>

            <CountryComparisonChart
              countryOneData={countryOneData}
              countryTwoData={countryTwoData}
            />
          </>
        )}
      </div>
    </Layout>
  );
}

export default Compare;