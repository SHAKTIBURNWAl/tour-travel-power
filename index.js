// ===========================================
// Load Environment Variables
// ===========================================

require("dotenv").config();

// ===========================================
// Import Required Modules
// ===========================================

const app = require("./src/app");
const connectDB = require("./src/config/db");

// ===========================================
// Server Configuration
// ===========================================

const PORT = process.env.PORT || 3000;

// ===========================================
// Start Server
// ===========================================

const startServer = async () => {
  try {
    console.log("======================================");
    console.log("🚀 Starting Tour Connect Backend...");
    console.log("======================================");

    // Connect MongoDB
    await connectDB();

    // Start Express Server
    app.listen(PORT, () => {
      console.log("======================================");
      console.log(`✅ Server Running Successfully`);
      console.log(`🌐 URL  : http://localhost:${PORT}`);
      console.log(`📦 Environment : ${process.env.NODE_ENV || "development"}`);
      console.log("======================================");
    });

  } catch (error) {
    console.error("======================================");
    console.error("❌ Failed to Start Application");
    console.error(error.message);
    console.error("======================================");
    process.exit(1);
  }
};

startServer();