import {
  getAllCountriesFromDB,
  getCountryFromDB,searchCountries,
} from "../models/countryModel.js";

import {
  getGlobalStatisticsFromDB,
} from "../models/globalModel.js";

export async function getCountriesFromDatabase(req, res) {
  try {
    const {
      continent,
      sort,
      page = 1,
      limit = 10,
    } = req.query;

    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    if (!Number.isInteger(pageNumber) || pageNumber < 1) {
      return res.status(400).json({
        success: false,
        message: "Page must be a positive integer",
      });
    }

    if (
      !Number.isInteger(limitNumber) ||
      limitNumber < 1 ||
      limitNumber > 300
    ) {
      return res.status(400).json({
        success: false,
        message: "Limit must be between 1 and 300",
      });
    }

    const allowedSorts = [
      "cases",
      "deaths",
      "recovered",
      "population",
    ];

    if (sort && !allowedSorts.includes(sort)) {
      return res.status(400).json({
        success: false,
        message: "Invalid sort field",
      });
    }

    const countries = await getAllCountriesFromDB({
      continent,
      sort,
      page: pageNumber,
      limit: limitNumber,
    });

    res.json({
      success: true,
      page: pageNumber,
      limit: limitNumber,
      count: countries.length,
      data: countries,
    });
  } catch (error) {
    console.error("Database countries error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to fetch countries from database",
    });
  }
}

export async function getGlobalFromDatabase(req, res) {
  try {
    const globalData = await getGlobalStatisticsFromDB();

    res.json({
      success: true,
      data: globalData,
    });
  } catch (error) {
    console.error("Database global data error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to fetch global data from database",
    });
  }
}

export async function getCountryDetailsFromDatabase(req, res) {
  try {
    const { countryName } = req.params;

    const country = await getCountryFromDB(countryName);

    if (!country) {
      return res.status(404).json({
        success: false,
        message: "Country not found in database",
      });
    }

    res.json({
      success: true,
      data: country,
    });
  } catch (error) {
    console.error("Country database error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to fetch country from database",
    });
  }
}

export async function searchCountriesFromDatabase(req, res) {
  try {
    const { name } = req.query;

    if (!name || name.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Search name is required",
      });
    }

    const countries = await searchCountries(name);

    res.json({
      success: true,
      count: countries.length,
      data: countries,
    });
  } catch (error) {
    console.error("Country search error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to search countries",
    });
  }
}