import pool from "../config/db.js";

export async function getAnalyticsOverview(
  req,
  res
) {
  try {
    const [rows] = await pool.query(`
      SELECT
        COUNT(*) AS total_countries,
        SUM(population) AS total_population,
        SUM(cases) AS total_cases,
        SUM(deaths) AS total_deaths,
        SUM(recovered) AS total_recovered,
        SUM(active) AS total_active,
        SUM(critical) AS total_critical,
        SUM(tests) AS total_tests
      FROM countries
      WHERE country_code IS NOT NULL
    `);

    res.json({
      success: true,
      data: rows[0],
    });
  } catch (error) {
    console.error(
      "Analytics overview error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Unable to fetch analytics overview",
    });
  }
}

export async function getTopCountries(
  req,
  res
) {
  try {
    const limit = Number(req.query.limit) || 10;

    const [rows] = await pool.query(
      `
      SELECT
        country_name,
        country_code,
        continent,
        population,
        cases,
        deaths,
        recovered,
        active
      FROM countries
      WHERE country_code IS NOT NULL
      ORDER BY cases DESC
      LIMIT ?
      `,
      [limit]
    );

    res.json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (error) {
    console.error(
      "Top countries analytics error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Unable to fetch top countries",
    });
  }
}

export async function getContinentAnalytics(
  req,
  res
) {
  try {
    const [rows] = await pool.query(`
      SELECT
        continent,
        COUNT(*) AS country_count,
        SUM(population) AS population,
        SUM(cases) AS cases,
        SUM(deaths) AS deaths,
        SUM(recovered) AS recovered,
        SUM(active) AS active
      FROM countries
      WHERE continent IS NOT NULL
      GROUP BY continent
      ORDER BY cases DESC
    `);

    res.json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (error) {
    console.error(
      "Continent analytics error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Unable to fetch continent analytics",
    });
  }
}