require("dotenv").config();
console.log("Mongo URI Loaded");

const app = require("./src/app");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
    console.log(`🚀 Server Running on Port ${PORT}`);
});