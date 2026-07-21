import pool from "../config/db.js";

export async function insertCountry(country) {
  const query = `
    INSERT INTO countries (
      country_name,
      country_code,
      continent,
      population,
      cases,
      deaths,
      recovered,
      active,
      critical,
      tests
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      country_name = VALUES(country_name),
      continent = VALUES(continent),
      population = VALUES(population),
      cases = VALUES(cases),
      deaths = VALUES(deaths),
      recovered = VALUES(recovered),
      active = VALUES(active),
      critical = VALUES(critical),
      tests = VALUES(tests),
      updated_at = CURRENT_TIMESTAMP
  `;

  const values = [
    country.country,
    country.countryInfo?.iso3 || null,
    country.continent || null,
    country.population || 0,
    country.cases || 0,
    country.deaths || 0,
    country.recovered || 0,
    country.active || 0,
    country.critical || 0,
    country.tests || 0,
  ];

  

  const [result] = await pool.query(query, values);

  return result;
}

export async function getAllCountriesFromDB({
  continent,
  sort,
  page = 1,
  limit = 10,
}) {
  let query = `
    SELECT *
    FROM countries
  `;

  const values = [];
  const conditions = [];

  if (continent) {
    conditions.push("continent = ?");
    values.push(continent);
  }

  if (conditions.length > 0) {
    query += ` WHERE ${conditions.join(" AND ")}`;
  }

  const allowedSortColumns = {
    cases: "cases",
    deaths: "deaths",
    recovered: "recovered",
    population: "population",
  };

  if (sort && allowedSortColumns[sort]) {
    query += ` ORDER BY ${allowedSortColumns[sort]} DESC`;
  } else {
    query += ` ORDER BY cases DESC`;
  }

  const offset = (page - 1) * limit;

  query += ` LIMIT ? OFFSET ?`;

  values.push(Number(limit), Number(offset));

  const [rows] = await pool.query(query, values);

  return rows;
}

export async function getCountryFromDB(countryName) {
  const query = `
    SELECT *
    FROM countries
    WHERE country_name = ?
  `;

  const [rows] = await pool.query(query, [countryName]);

  return rows[0];
}

export async function searchCountries(countryName) {
  const query = `
    SELECT *
    FROM countries
    WHERE country_name LIKE ?
    ORDER BY cases DESC
  `;

  const [rows] = await pool.query(query, [`%${countryName}%`]);

  return rows;
}