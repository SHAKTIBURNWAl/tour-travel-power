const logger = (req, res, next) => {
  console.log("LOGGER WORKING");
  console.log(req.method, req.originalUrl);

  next();
};

module.exports = logger;