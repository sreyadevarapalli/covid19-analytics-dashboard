import {
  fetchGlobalData,
} from "../services/covidService.js";

import {
  saveGlobalStatistics,
} from "../models/globalModel.js";

export async function getGlobalStatistics(
  req,
  res
) {
  try {
    const data =
      await fetchGlobalData();

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(
      "Global statistics error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Unable to fetch global COVID data",
    });
  }
}

export async function syncGlobalStatistics(
  req,
  res
) {
  try {
    const data =
      await fetchGlobalData();

    await saveGlobalStatistics(data);

    res.json({
      success: true,
      message:
        "Global statistics saved successfully",
    });
  } catch (error) {
    console.error(
      "Global statistics sync error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to save global statistics",
    });
  }
}