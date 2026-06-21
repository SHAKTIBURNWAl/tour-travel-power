const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    tour_id: {
      type: Number,
      required: [true, "Tour ID is required"],
      unique: true,
    },

    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters"],
    },

    pick_up: {
      type: String,
      required: [true, "Pick up location is required"],
      trim: true,
    },

    meeting_point: {
      type: String,
      required: [true, "Meeting point is required"],
      trim: true,
    },

    drop_off: {
      type: String,
      required: [true, "Drop off location is required"],
      trim: true,
    },

    duration: {
      type: Number,
      required: [true, "Duration is required"],
      min: [1, "Duration must be at least 1"],
    },

    duration_unit: {
      type: String,
      enum: ["hours", "days"],
      default: "days",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tour", tourSchema);