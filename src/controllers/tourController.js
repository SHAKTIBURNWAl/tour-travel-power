const Tour = require("../models/Tour");

// ======================================================
// Create New Tour
// ======================================================
const createTour = async (req, res, next) => {
  try {
    const tour = await Tour.create(req.body);

    console.log(`✅ New Tour Created : ${tour.title}`);

    res.status(201).json({
      success: true,
      message: "Tour Created Successfully",
      data: tour,
    });
  } catch (error) {
    // Duplicate Tour ID
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Tour ID already exists.",
      });
    }

    next(error);
  }
};

// ======================================================
// Get All Tours (Search + Pagination)
// ======================================================
const getAllTours = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const search = req.query.title || "";

    // Search Filter
    const filter = {
      title: {
        $regex: search,
        $options: "i",
      },
    };

    const tours = await Tour.find(filter).skip(skip).limit(limit);

    const total = await Tour.countDocuments(filter);

    console.log(`📋 ${tours.length} Tour(s) Fetched Successfully`);

    res.status(200).json({
      success: true,
      total,
      page,
      limit,
      count: tours.length,
      data: tours,
    });
  } catch (error) {
    next(error);
  }
};

// ======================================================
// Get Single Tour By ID
// ======================================================
const getTourById = async (req, res, next) => {
  try {
    const tour = await Tour.findById(req.params.id);

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: tour,
    });
  } catch (error) {
    next(error);
  }
};

// ======================================================
// Update Tour
// ======================================================
const updateTour = async (req, res, next) => {
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
        success: false,
        message: "Tour Not Found",
      });
    }

    console.log(`✏️ Tour Updated : ${tour.title}`);

    res.status(200).json({
      success: true,
      message: `${tour.title} updated Successfully`,
      data: tour,
    });
  } catch (error) {
    next(error);
  }
};

// ======================================================
// Delete Tour
// ======================================================
const deleteTour = async (req, res, next) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour Not Found",
      });
    }

    console.log(`🗑️ Tour Deleted : ${tour.title}`);

    res.status(200).json({
      success: true,
      message: `${tour.title} deleted Successfully`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTour,
  getAllTours,
  getTourById,
  updateTour,
  deleteTour,
};