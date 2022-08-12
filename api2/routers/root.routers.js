const { userRouters } = require("./user.routers");
const express = require("express");
const { authRouter } = require("./auth.routers");
const { movieRouters } = require("./movie.routers");
const { theLoaiRouter } = require("./theLoai.router");
const { lichchieuRouter } = require("./lichchieu.routers");
const { datveRouter } = require("./datve.routers");
const rootRouters = express.Router();

rootRouters.use("/users", userRouters);
rootRouters.use("/auth", authRouter);

rootRouters.use("/movies", movieRouters);
rootRouters.use("/theloai", theLoaiRouter);
rootRouters.use("/lichchieu", lichchieuRouter);
rootRouters.use("/datve", datveRouter);
module.exports = {
  rootRouters,
};
