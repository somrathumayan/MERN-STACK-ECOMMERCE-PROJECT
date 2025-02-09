const createError = require("http-errors");


// controller 

const getUsers = (req, res, next) => {
    // res.send("Get: Products found")
    try {
        res.status(200).send({
            message: "users were found",
       
        })
        
    } catch (error) {
        next(error)
    }
}

module.exports = {getUsers};