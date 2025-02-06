const express = require("express");
const morgan = require("morgan");
// const bodyParser = require("body-parser");

const createError = require("http-errors");
const xssClean = require('xss-clean')
const rateLimit = require("express-rate-limit");
const userRouter = require("./routers/userRouter");


const app = express();

const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,  // 1 minute
    max: 5,
    message: "Too many requests from this IP. Please try again later",
})

app.use(rateLimiter);
app.use(xssClean);
app.use(morgan("dev"));
// app.use(isLoggedIn);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/users", userRouter)

// middleware
// const isLoggedIn = (req, res, next) => {
//     const login = true;
//     if (login){
//         req.body.id = 101;
//         next();
//     } else {
//         return res.status(401).json({message: 'Please login first'});
//     }
//     next();
// };

app.get("/", (req, res) => {
    res.send("Welcome to the server");
});

// middleware use 
// app.get("/prod", isLoggedIn , (req, res) => {
//     res.send("Get: Middleware Products found")
// })


// isLoggedIn ,
// app.get("/products", rateLimiter, (req, res) => {
//     console.log(req.body.id);
//     res.status(200).send({
//         message: "Product profile returned",
//     });
// });





/*
app.put("/products", (req, res) => {
    res.send("Put: Products found")
})

app.post("/products", (req, res) => {
    res.send("Post: Products found")
})

app.delete("/products", (req, res) => {
    res.send("Delete: Products found")
})
**/

// client error handling
app.use((req, res, next) => {
    // res.status(404).json({message: "Route not found!"})
    createError(404, "Route not found!")
    next();
})

// server error handling -> all errors
app.use((err, req, res, next) => {
    // console.log(err.stack);
    // res.status(500).send("Something broke!")
    return res.status(err.status || 500).json({
        success: false,
        message: err.message,
    })
})


module.exports = app;