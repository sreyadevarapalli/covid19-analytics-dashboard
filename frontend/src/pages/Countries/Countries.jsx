import { useMemo, useState } from "react";

import Layout from "../../components/layout/Layout";
import CountryHeader from "../../components/countries/CountryHeader";
import CountryGrid from "../../components/countries/CountryGrid";

import SearchBar from "../../components/ui/SearchBar";
import Pagination from "../../components/ui/Pagination";
import SortDropdown from "../../components/ui/SortDropdown";
import EmptyState from "../../components/ui/EmptyState";

import useCountries from "../../hooks/useCountries";

function Countries() {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("All");
  const [populationRange, setPopulationRange] =
    useState("All");

  const [minCases, setMinCases] = useState("");
  const [maxCases, setMaxCases] = useState("");

  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const countriesPerPage = 12;

  const {
    countries,
    loading,
    error,
  } = useCountries();

  const regions = [
    "All",
    "Africa",
    "Asia",
    "Europe",
    "North America",
    "South America",
    "Oceania",
  ];

  const populationOptions = [
    {
      label: "All",
      value: "All",
    },
    {
      label: "Below 1 Million",
      value: "below-1m",
    },
    {
      label: "1M – 10M",
      value: "1m-10m",
    },
    {
      label: "10M – 50M",
      value: "10m-50m",
    },
    {
      label: "50M – 100M",
      value: "50m-100m",
    },
    {
      label: "Above 100M",
      value: "above-100m",
    },
  ];

  const sortOptions = [
    {
      label: "Default",
      value: "default",
    },
    {
      label: "Country A-Z",
      value: "country-asc",
    },
    {
      label: "Country Z-A",
      value: "country-desc",
    },
    {
      label: "Highest Cases",
      value: "cases-desc",
    },
    {
      label: "Lowest Cases",
      value: "cases-asc",
    },
    {
      label: "Highest Deaths",
      value: "deaths-desc",
    },
    {
      label: "Highest Recovered",
      value: "recovered-desc",
    },
    {
      label: "Highest Population",
      value: "population-desc",
    },
  ];

  const handleFilterChange = (setter) => (value) => {
    setter(value);
    setCurrentPage(1);
  };

  const filteredCountries = useMemo(() => {
    const minimumCases = minCases
      ? Number(minCases)
      : null;

    const maximumCases = maxCases
      ? Number(maxCases)
      : null;

    const filtered = countries.filter((country) => {
      const countryName =
        country.country_name?.toLowerCase() || "";

      const population =
        Number(country.population) || 0;

      const cases =
        Number(country.cases) || 0;

      const matchesSearch = countryName.includes(
        searchTerm.toLowerCase()
      );

      const matchesRegion =
        region === "All" ||
        country.continent === region;

      const matchesPopulation =
        populationRange === "All" ||
        (populationRange === "below-1m" &&
          population < 1_000_000) ||
        (populationRange === "1m-10m" &&
          population >= 1_000_000 &&
          population <= 10_000_000) ||
        (populationRange === "10m-50m" &&
          population > 10_000_000 &&
          population <= 50_000_000) ||
        (populationRange === "50m-100m" &&
          population > 50_000_000 &&
          population <= 100_000_000) ||
        (populationRange === "above-100m" &&
          population > 100_000_000);

      const matchesMinimumCases =
        minimumCases === null ||
        cases >= minimumCases;

      const matchesMaximumCases =
        maximumCases === null ||
        cases <= maximumCases;

      return (
        matchesSearch &&
        matchesRegion &&
        matchesPopulation &&
        matchesMinimumCases &&
        matchesMaximumCases
      );
    });

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "country-asc":
          return a.country_name.localeCompare(
            b.country_name
          );

        case "country-desc":
          return b.country_name.localeCompare(
            a.country_name
          );

        case "cases-desc":
          return (
            (Number(b.cases) || 0) -
            (Number(a.cases) || 0)
          );

        case "cases-asc":
          return (
            (Number(a.cases) || 0) -
            (Number(b.cases) || 0)
          );

        case "deaths-desc":
          return (
            (Number(b.deaths) || 0) -
            (Number(a.deaths) || 0)
          );

        case "recovered-desc":
          return (
            (Number(b.recovered) || 0) -
            (Number(a.recovered) || 0)
          );

        case "population-desc":
          return (
            (Number(b.population) || 0) -
            (Number(a.population) || 0)
          );

        default:
          return 0;
      }
    });
  }, [
    countries,
    searchTerm,
    region,
    populationRange,
    minCases,
    maxCases,
    sortBy,
  ]);

  const totalPages = Math.ceil(
    filteredCountries.length / countriesPerPage
  );

  const safeCurrentPage =
    totalPages === 0
      ? 1
      : Math.min(currentPage, totalPages);

  const startIndex =
    (safeCurrentPage - 1) * countriesPerPage;

  const paginatedCountries =
    filteredCountries.slice(
      startIndex,
      startIndex + countriesPerPage
    );

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <CountryHeader />

        <div className="mb-10 rounded-2xl bg-white p-6 shadow-lg">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Search */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Search
              </label>

              <SearchBar
                value={searchTerm}
                onChange={handleFilterChange(
                  setSearchTerm
                )}
                placeholder="Search countries..."
              />
            </div>

            {/* Region */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Region
              </label>

              <select
                value={region}
                onChange={(e) =>
                  handleFilterChange(setRegion)(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                {regions.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Population */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Population
              </label>

              <select
                value={populationRange}
                onChange={(e) =>
                  handleFilterChange(
                    setPopulationRange
                  )(e.target.value)
                }
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                {populationOptions.map(
                  (option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  )
                )}
              </select>
            </div>

            {/* Minimum Cases */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Minimum Cases
              </label>

              <input
                type="number"
                min="0"
                value={minCases}
                onChange={(e) =>
                  handleFilterChange(setMinCases)(
                    e.target.value
                  )
                }
                placeholder="Example: 1000000"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Maximum Cases */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Maximum Cases
              </label>

              <input
                type="number"
                min="0"
                value={maxCases}
                onChange={(e) =>
                  handleFilterChange(setMaxCases)(
                    e.target.value
                  )
                }
                placeholder="Example: 50000000"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Sort */}
            <SortDropdown
              value={sortBy}
              onChange={handleFilterChange(setSortBy)}
              options={sortOptions}
              label="Sort"
            />
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-lg text-gray-500">
              Loading countries...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="rounded-xl bg-red-50 p-6 text-center text-red-600">
            {error}
          </div>
        )}

        {/* Results */}
        {!loading && !error && (
          <>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-bold text-gray-800">
                  {filteredCountries.length}
                </span>{" "}
                of{" "}
                <span className="font-bold text-gray-800">
                  {countries.length}
                </span>{" "}
                countries
              </p>

              <p className="text-sm text-gray-500">
                Page{" "}
                {totalPages === 0
                  ? 0
                  : safeCurrentPage}{" "}
                of {totalPages}
              </p>
            </div>

            {paginatedCountries.length > 0 ? (
              <CountryGrid
                countries={paginatedCountries}
              />
            ) : (
              <EmptyState
                title="No Countries Found"
                message="Try changing your search or filters."
              />
            )}

            <Pagination
              currentPage={safeCurrentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </Layout>
  );
}

export default Countries;