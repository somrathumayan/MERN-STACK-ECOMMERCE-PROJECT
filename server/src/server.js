
const app = require("./app");
const {Port} = require("./secret");

app.listen(Port, () => {
    console.log(`Server is running at http://localhost:${Port}`);
})