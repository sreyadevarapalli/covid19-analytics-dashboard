import express from "express";

import {
  getAllCountries,
  getCountryByName,
  saveCountriesToDatabase,
} from "../controllers/countryController.js";

const router = express.Router();

router.get("/", getAllCountries);

router.post("/sync", saveCountriesToDatabase);

router.get("/:countryName", getCountryByName);

export default router;