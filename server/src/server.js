const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
// app.use(isLoggedIn);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// middleware
const isLoggedIn = (req, res, next) => {
    const login = true;
    if (login){
        req.body.id = 101;
        next();
    } else {
        return res.status(401).json({message: 'Please login first'});
    }
    next();
};

app.get("/", (req, res) => {
    res.send("Welcome to the server");
});

// middleware use 
app.get("/prod", isLoggedIn , (req, res) => {
    res.send("Get: Middleware Products found")
})

app.get("/api/user", isLoggedIn , (req, res) => {
    console.log(req.body.id);
    res.status(200).send({
        mesaage: "User profile returned",
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


app.listen(3001, () => {
    console.log("Server is running at port 3001");
})

