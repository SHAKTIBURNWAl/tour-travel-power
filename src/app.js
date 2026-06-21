const express = require("express");
const cors = require("cors");

const tourRoutes = require("./routes/tourRoutes");
const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

// Logger Middleware
app.use(logger);

// Home Route
app.get("/", (req, res) => {
  res.send("Tour Connect API Running");
});

// Tour Routes
app.use("/tour", tourRoutes);

// Not Found Middleware
app.use(notFound);

// Global Error Handler
app.use(errorHandler);

module.exports = app;