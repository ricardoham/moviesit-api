const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  API_PORT: process.env.API_PORT || 8080,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017",
  MONGO_DBNAME: process.env.MONGO_DBNAME,
};
