import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import pool from "./src/config/db.js";

import globalRoutes from "./src/routes/globalRoutes.js";
import countryRoutes from "./src/routes/countryRoutes.js";
import databaseRoutes from "./src/routes/databaseRoutes.js";
import analyticsRoutes from "./src/routes/analyticsRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// ===============================
// MIDDLEWARE
// ===============================

app.use(cors());

app.use(express.json());

// ===============================
// ROOT ROUTE
// ===============================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message:
      "COVID-19 Analytics Backend API is running",
  });
});

// ===============================
// HEALTH CHECK
// ===============================

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is healthy",
  });
});

// ===============================
// DATABASE TEST
// ===============================

app.get("/api/db-test", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT 1 AS result"
    );

    res.json({
      success: true,
      message:
        "Database connected successfully",
      data: rows,
    });
  } catch (error) {
    console.error(
      "Database connection error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Database connection failed",
    });
  }
});

// ===============================
// API ROUTES
// ===============================

app.use(
  "/api/global",
  globalRoutes
);

app.use(
  "/api/countries",
  countryRoutes
);

app.use(
  "/api/db",
  databaseRoutes
);

app.use(
  "/api/analytics",
  analyticsRoutes
);

// ===============================
// START SERVER
// ===============================

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on http://localhost:${PORT}`
  );
});