// Global Error Handler Middleware
// Handles all unhandled application errors

const errorHandler = (err, req, res, next) => {
  console.error("========== ERROR ==========");
  console.error("Time      :", new Date().toLocaleString());
  console.error("Method    :", req.method);
  console.error("Endpoint  :", req.originalUrl);
  console.error("Message   :", err.message);
  console.error("===========================");

  let statusCode = res.statusCode;

  // If status code is still 200, change it to 500
  if (statusCode === 200) {
    statusCode = 500;
  }

  res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;