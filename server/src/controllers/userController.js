const createError = require("http-errors");
const users = require("../models/userModel");

// controller 

const getUsers = (req, res, next) => {
    // res.send("Get: Products found")
    try {
        res.status(200).send({
            message: "users were found",
            users: users
        })
        
    } catch (error) {
        next(error)
    }
}

module.exports = {getUsers};