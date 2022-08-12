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
const movieRouters = express.Router();
movieRouters.get(
  "/",
  logger("Lay danh sach phim"),

  getListMovie
); //lay danh sach phim (get)
//api:{{url}}/api/movies/
movieRouters.post(
  "/",
  authenticate,
  authorize(["ADMIN"]),
  uploadImageSingle("hinhanh"),
  createMovie
); //them phim (post)
//api:{{url}}/api/movies/
movieRouters.get(
  "/:id",
  logger("Lay chi tiet phim"),
  authenticate,
  authorize(["ADMIN"]),
  getDetailFilm
); //lay chi tiet phim(get)
//api:{{url}}/api/movies/:id
movieRouters.put(
  "/:id",
  authenticate,
  authorize(["ADMIN"]),
  logger("cap nhat phim"),
  uploadImageSingle("hinhanh"),
  updateFilm
);
movieRouters.delete(
  "/:id",
  logger("xoa phim"),
  authenticate,
  authorize(["ADMIN"]),
  removeFilm
);

module.exports = {
  movieRouters,
};
