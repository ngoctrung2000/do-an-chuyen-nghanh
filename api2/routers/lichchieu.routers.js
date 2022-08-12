const { Router } = require("express");
const {
  getAllLichChieu,
  getAllLichChieuTheLoai,
  getAllLichChieuAdmin,
  createLichChieu,
  updateLichChieu,
  getDetailPhimLichChieu,
  getDetailLichChieu,
  createBulkGhe,
  updateBulkGhe,
  removeLichChieu,
} = require("../controllers/lichchieu.controllers");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/verify-token.middleware");
const lichchieuRouter = Router();
lichchieuRouter.get("/", getAllLichChieu);
lichchieuRouter.get("/phim/:id", getDetailPhimLichChieu);
lichchieuRouter.get("/xemnhieu", getAllLichChieuTheLoai("xemnhieu"));
lichchieuRouter.get("/phimle", getAllLichChieuTheLoai("phimle"));
lichchieuRouter.get("/kinhdi", getAllLichChieuTheLoai("kinh dị"));
lichchieuRouter.get("/admin", getAllLichChieuAdmin);
lichchieuRouter.post(
  "/",
  authenticate,
  authorize(["ADMIN"]),
  createLichChieu,
  createBulkGhe
);
lichchieuRouter.post("/ghe", createBulkGhe);
lichchieuRouter.delete(
  "/:id",
  authenticate,
  authorize(["ADMIN"]),
  removeLichChieu
);
lichchieuRouter.put(
  "/:id",
  authenticate,
  authorize(["ADMIN"]),
  updateLichChieu
);
lichchieuRouter.get("/:id", getDetailLichChieu);
module.exports = {
  lichchieuRouter,
};
