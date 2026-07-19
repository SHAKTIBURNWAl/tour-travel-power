// Logger Middleware
// Logs every incoming request with timestamp, method and URL

const logger = (req, res, next) => {
  const currentTime = new Date().toLocaleString();

  console.log("======================================");
  console.log("Request Time :", currentTime);
  console.log("Method       :", req.method);
  console.log("Endpoint     :", req.originalUrl);
  console.log("======================================");

  next();
};

module.exports = logger;