const BASE_URL = "https://disease.sh/v3/covid-19";

async function request(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
}

export async function getGlobalStats() {
  return request("/all");
}

export async function getCountries() {
  return request("/countries");
}

export async function getCountryByName(countryName) {
  return request(
    `/countries/${encodeURIComponent(countryName)}`
  );
}

export async function getCountryHistory(countryName) {
  return request(
    `/historical/${encodeURIComponent(countryName)}?lastdays=all`
  );
}