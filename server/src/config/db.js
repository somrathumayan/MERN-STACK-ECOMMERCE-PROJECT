const mongoose = require("mongoose");
const {mongoDbURL} = require("../secret")
const connectDB = async (options = {}) => {
    try {
        await mongoose.connect(mongoDbURL, options);
        console.log("Connection MongoDB Successful");


        // fir connection error 
        mongoose.connection.on("error", (error) => {
            console.error("DB Connection Error: ", error);
        })
    } catch (error) {
        console.error("Could not connect to DB", error.toString());
    }
}

module.exports = connectDB;