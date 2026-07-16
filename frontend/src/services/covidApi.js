import axios from "axios";

const BASE_URL = "https://disease.sh/v3/covid-19";

const api = axios.create({
  baseURL: BASE_URL,
});


export const getGlobalStats = async () => {
  const response = await api.get("/all");
  return response.data;
};


export const getCountries = async () => {
  const response = await api.get("/countries");
  return response.data;
};

export const getCountryByName = async (countryName) => {
  const response = await api.get(`/countries/${countryName}`);
  return response.data;
};

export const getCountryHistory = async (countryName) => {
  const response = await api.get(
    `/historical/${countryName}?lastdays=90`
  );

  return response.data;
};