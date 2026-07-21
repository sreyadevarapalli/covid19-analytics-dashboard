import express from "express";

import {
  getAnalyticsOverview,
  getTopCountries,
  getContinentAnalytics,
} from "../controllers/analyticsController.js";

const router = express.Router();

router.get(
  "/overview",
  getAnalyticsOverview
);

router.get(
  "/top-countries",
  getTopCountries
);

router.get(
  "/continents",
  getContinentAnalytics
);

export default router;