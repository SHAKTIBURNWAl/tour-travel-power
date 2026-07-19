const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Tour Connect REST API",
      version: "1.0.0",
      description:
        "REST API documentation for Tour Connect Backend Project",
    },

    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },

  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;