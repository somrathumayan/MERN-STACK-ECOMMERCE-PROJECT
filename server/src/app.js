const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");

const app = express();
app.use(morgan("dev"));
// app.use(isLoggedIn);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

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
app.get("/api/user",  (req, res) => {
    console.log(req.body.id);
    res.status(200).send({
        message: "User profile returned",
    });
});

app.get("/products", (req, res) => {
    res.send("Get: Products found")
})

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