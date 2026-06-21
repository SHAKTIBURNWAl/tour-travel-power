const express = require("express");

const {
  createTour,
  getAllTours,
  getTourById,
  updateTour,
  deleteTour,
} = require("../controllers/tourController");

const router = express.Router();

// Get All Tours
router.get("/", getAllTours);

// Get Single Tour By ID
router.get("/:id", getTourById);

// Create Tour
router.post("/", createTour);

// Update Tour
router.put("/:id", updateTour);

// Delete Tour
router.delete("/:id", deleteTour);

module.exports = router;