
const app = require("./app");
const connectDB = require("./config/db");
const {Port} = require("./secret");

app.listen(Port, async () => {
    console.log(`Server is running at http://localhost:${Port}`);
    await connectDB();
})