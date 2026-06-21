const Tour = require("../models/Tour");

// Create Tour
const createTour = async (req, res) => {
  try {
    const tour = await Tour.create(req.body);

    console.log("New Tour Created:", tour.title);

    res.status(201).json({
      message: "Tour Created Successfully",
      data: tour,
    });
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Tours (Pagination + Search)
const getAllTours = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 5;

    const skip = (page - 1) * limit;

    const search = req.query.title || "";

    const tours = await Tour.find({
      title: {
        $regex: search,
        $options: "i",
      },
    })
      .skip(skip)
      .limit(limit);

    const total = await Tour.countDocuments();

    console.log("Fetched All Tours");

    res.status(200).json({
      total,
      page,
      limit,
      count: tours.length,
      data: tours,
    });
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Tour By ID
const getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    if (!tour) {
      return res.status(404).json({
        message: "Tour Not Found",
      });
    }

    res.status(200).json({
      data: tour,
    });
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Tour
const updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!tour) {
      return res.status(404).json({
        message: "Tour Not Found",
      });
    }

    console.log("Tour Updated:", tour.title);

    res.status(200).json({
      message: `${tour.title} updated Successfully`,
      data: tour,
    });
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Tour
const deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);

    if (!tour) {
      return res.status(404).json({
        message: "Tour Not Found",
      });
    }

    console.log("Tour Deleted:", tour.title);

    res.status(200).json({
      message: `${tour.title} deleted Successfully`,
    });
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createTour,
  getAllTours,
  getTourById,
  updateTour,
  deleteTour,
};