const express = require("express");
const userRouter = express.Router();



userRouter.get("/",  getUsers)

module.exports = userRouter;