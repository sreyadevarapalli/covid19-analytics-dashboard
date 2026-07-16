import { useEffect, useMemo, useState } from "react";

import Layout from "../../components/layout/Layout";

import CountryHeader from "../../components/countries/CountryHeader";
import CountryGrid from "../../components/countries/CountryGrid";

import Loader from "../../components/ui/Loader";
import ErrorMessage from "../../components/ui/ErrorMessage";
import SearchBar from "../../components/ui/SearchBar";
import SortDropdown from "../../components/ui/SortDropdown";
import Pagination from "../../components/ui/Pagination";

import useCountries from "../../hooks/useCountries";

function Countries() {
  const { countries, loading, error } = useCountries();

  // Search
  const [search, setSearch] = useState("");

  // Sorting
  const [sortBy, setSortBy] = useState("cases");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 20;

  // Reset page when search or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, sortBy]);

  // Search + Sort
  const filteredCountries = useMemo(() => {
    const filtered = countries.filter((country) =>
      country.country.toLowerCase().includes(search.toLowerCase())
    );

    switch (sortBy) {
      case "name":
        return [...filtered].sort((a, b) =>
          a.country.localeCompare(b.country)
        );

      case "deaths":
        return [...filtered].sort((a, b) => b.deaths - a.deaths);

      case "recovered":
        return [...filtered].sort((a, b) => b.recovered - a.recovered);

      case "active":
        return [...filtered].sort((a, b) => b.active - a.active);

      case "population":
        return [...filtered].sort((a, b) => b.population - a.population);

      case "cases":
      default:
        return [...filtered].sort((a, b) => b.cases - a.cases);
    }
  }, [countries, search, sortBy]);

  // Pagination Logic
  const totalPages = Math.ceil(
    filteredCountries.length / countriesPerPage
  );

  const startIndex = (currentPage - 1) * countriesPerPage;

  const currentCountries = filteredCountries.slice(
    startIndex,
    startIndex + countriesPerPage
  );

  if (loading) {
    return (
      <Layout>
        <Loader text="Loading countries..." />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <ErrorMessage message={error} />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <CountryHeader />

        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a country..."
        />

        <SortDropdown
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        />

        <p className="mb-6 text-gray-600">
          Showing{" "}
          <span className="font-semibold">
            {filteredCountries.length}
          </span>{" "}
          countries
        </p>

        <CountryGrid countries={currentCountries} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={() =>
            setCurrentPage((page) => Math.max(page - 1, 1))
          }
          onNext={() =>
            setCurrentPage((page) =>
              Math.min(page + 1, totalPages)
            )
          }
        />
      </div>
    </Layout>
  );
}

export default Countries;