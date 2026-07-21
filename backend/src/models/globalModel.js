import pool from "../config/db.js";

export async function saveGlobalStatistics(data) {
  const query = `
    INSERT INTO global_statistics (
      id,
      total_cases,
      total_deaths,
      total_recovered,
      active_cases,
      critical_cases,
      total_tests
    )
    VALUES (1, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      total_cases = VALUES(total_cases),
      total_deaths = VALUES(total_deaths),
      total_recovered = VALUES(total_recovered),
      active_cases = VALUES(active_cases),
      critical_cases = VALUES(critical_cases),
      total_tests = VALUES(total_tests),
      updated_at = CURRENT_TIMESTAMP
  `;

  const values = [
    data.cases || 0,
    data.deaths || 0,
    data.recovered || 0,
    data.active || 0,
    data.critical || 0,
    data.tests || 0,
  ];

  const [result] = await pool.query(query, values);

  return result;
}

export async function getGlobalStatisticsFromDB() {
  const query = `
    SELECT *
    FROM global_statistics
    WHERE id = 1
  `;

  const [rows] = await pool.query(query);

  return rows[0];
}