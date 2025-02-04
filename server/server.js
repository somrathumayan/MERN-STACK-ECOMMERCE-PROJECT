const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the server");
});

app.get("/products", (req, res) => {
    res.send("Products are returned")
})

app.listen(3001, () => {
    console.log("Server is running at port 3001");
})