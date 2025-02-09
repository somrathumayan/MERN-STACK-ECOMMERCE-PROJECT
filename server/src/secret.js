require("dotenv").config();

const serverPort = process.env.SERVER_PORT || 3002;

const mongoDbURL = process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/ecommerceMernDb";

const defaultImagePath = process.env.DEFAULT_USER_IMAGE_PATH || "public/images/users/humayan.jpg";


module.exports = {serverPort, mongoDbURL, defaultImagePath}