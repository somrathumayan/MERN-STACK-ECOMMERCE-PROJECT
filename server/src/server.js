const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Welcome to the server");
});

app.get("/products", (req, res) => {
    res.send("Get: Products found")
})

app.put("/products", (req, res) => {
    res.send("Put: Products found")
})

app.post("/products", (req, res) => {
    res.send("Post: Products found")
})

app.delete("/products", (req, res) => {
    res.send("Delete: Products found")
})

app.listen(3001, () => {
    console.log("Server is running at port 3001");
})