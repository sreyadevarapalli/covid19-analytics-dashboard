import express from "express";

import {
  getCountriesFromDatabase,
  getGlobalFromDatabase,
  getCountryDetailsFromDatabase,
  searchCountriesFromDatabase,
} from "../controllers/databaseController.js";

const router = express.Router();

router.get("/countries", getCountriesFromDatabase);

router.get("/countries/search", searchCountriesFromDatabase);

router.get(
  "/countries/:countryName",
  getCountryDetailsFromDatabase
);

router.get("/global", getGlobalFromDatabase);
export default router;