const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:5000/api";

async function request(endpoint) {
  const response = await fetch(
    `${API_BASE_URL}${endpoint}`
  );

  if (!response.ok) {
    throw new Error(
      `API request failed: ${response.status}`
    );
  }

  const result = await response.json();

  if (result.success === false) {
    throw new Error(
      result.message ||
        "API request failed"
    );
  }

  return result.data ?? result;
}

// =================================
// GLOBAL STATISTICS
// =================================

export async function getGlobalStats() {
  return request("/global");
}

// =================================
// COUNTRIES
// =================================

export async function getCountries() {
  return request("/countries");
}

export async function getCountryByName(
  countryName
) {
  return request(
    `/countries/${encodeURIComponent(
      countryName
    )}`
  );
}

// =================================
// COUNTRY HISTORY
// =================================

export async function getCountryHistory(
  countryName
) {
  return request(
    `/countries/history/${encodeURIComponent(
      countryName
    )}`
  );
}

// =================================
// ANALYTICS
// =================================

export async function getTopCountriesAnalytics() {
  return request(
    "/analytics/top-countries?limit=30"
  );
}

export async function getActiveCasesAnalytics() {
  return request(
    "/analytics/active-cases?limit=30"
  );
}

export async function getTopDeathsAnalytics() {
  return request(
    "/analytics/top-deaths?limit=10"
  );
}

export async function getContinentAnalytics() {
  return request(
    "/analytics/continents"
  );
}

export async function getAnalyticsOverview() {
  return request(
    "/analytics/overview"
  );
}