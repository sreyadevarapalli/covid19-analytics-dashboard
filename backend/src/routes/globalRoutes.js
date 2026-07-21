import express from "express";

import {
  getGlobalStatistics,
} from "../controllers/globalController.js";

const router = express.Router();

router.get(
  "/",
  getGlobalStatistics
);

export default router;