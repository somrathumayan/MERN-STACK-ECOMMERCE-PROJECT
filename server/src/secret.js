require("dotenv").config();

const serverPort = process.env.SERVER_PORT || 3002;

const mongoDbURL = process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/ecommerceMernDb";

module.exports = {serverPort, mongoDbURL}