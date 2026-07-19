const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swagger");

const tourRoutes = require("./routes/tourRoutes");
const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

console.log("🔥 THIS IS MY APP.JS");

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Serve frontend
app.use(express.static(path.join(__dirname, "../public")));

// Test Route
app.get("/test", (req, res) => {
  res.send("APP.JS IS WORKING");
});

// Home Route - Serve Frontend
app.get("/", (req, res) => {
  res.redirect("/index.html");
});

// Swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// API Routes
app.use("/tour", tourRoutes);

// 404
app.use(notFound);

// Error Handler
app.use(errorHandler);

module.exports = app;