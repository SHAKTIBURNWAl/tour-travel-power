// Not Found Middleware
// Executes when the requested route does not exist

const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: `Route '${req.originalUrl}' Not Found`,
    suggestion: "Please check the API endpoint and HTTP method.",
  });
};

module.exports = notFound;