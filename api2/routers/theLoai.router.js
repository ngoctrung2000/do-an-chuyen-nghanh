const express = require("express");
const { logger } = require("../middlewares/log/logger.middlewares");
const {
  uploadImageSingle,
} = require("../middlewares/uploads/upload-image.middlewares");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/verify-token.middleware");
const {
  getListMovie,
  createMovie,
  getDetailFilm,
  getTheLoaiFilm,
  removeFilm,
  updateFilm,
} = require("../controllers/movie.controllers");
const theLoaiRouter = express.Router();

theLoaiRouter.get("/phimle", getTheLoaiFilm("phimle"));
theLoaiRouter.get("/xemnhieu", getTheLoaiFilm("xemnhieu"));
module.exports = {
  theLoaiRouter,
};
