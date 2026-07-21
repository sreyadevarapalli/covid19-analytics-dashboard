import {
  fetchAllCountries,
  fetchCountryByName,
} from "../services/covidService.js";

import { insertCountry } from "../models/countryModel.js";

export async function getAllCountries(req, res) {
  try {
    const countries = await fetchAllCountries();

    res.json({
      success: true,
      count: countries.length,
      data: countries,
    });
  } catch (error) {
    console.error("Countries data error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to fetch countries COVID data",
    });
  }
}

export async function getCountryByName(req, res) {
  try {
    const { countryName } = req.params;

    const country = await fetchCountryByName(countryName);

    res.json({
      success: true,
      data: country,
    });
  } catch (error) {
    console.error("Country details error:", error.message);

    res.status(404).json({
      success: false,
      message: "Country not found",
    });
  }
}

export async function saveCountriesToDatabase(req, res) {
  try {
    const countries = await fetchAllCountries();

    for (const country of countries) {
      await insertCountry(country);
    }

    res.json({
      success: true,
      message: "Countries saved successfully",
      count: countries.length,
    });
  } catch (error) {
    console.error("Save countries error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to save countries",
    });
  }
}