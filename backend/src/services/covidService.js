const COVID_API_BASE_URL = "https://disease.sh/v3/covid-19";

export async function fetchGlobalData() {
  const response = await fetch(`${COVID_API_BASE_URL}/all`);

  if (!response.ok) {
    throw new Error("Failed to fetch global COVID data");
  }

  return response.json();
}

export async function fetchAllCountries() {
  const response = await fetch(`${COVID_API_BASE_URL}/countries`);

  if (!response.ok) {
    throw new Error("Failed to fetch countries COVID data");
  }

  return response.json();
}

export async function fetchCountryByName(countryName) {
  const response = await fetch(
    `${COVID_API_BASE_URL}/countries/${encodeURIComponent(countryName)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch country COVID data");
  }

  return response.json();
}