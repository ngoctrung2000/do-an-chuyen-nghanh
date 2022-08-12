const { Router } = require("express");
const {
  getAllDatVe,
  getDetaildatve,
  createdatve,
  removedatve,
  updatedatve,
  getAll,
  datghe,
} = require("../controllers/datve.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/verify-token.middleware");
const datveRouter = Router();
datveRouter.get("/", authenticate, authorize(["ADMIN"]), getAllDatVe);
datveRouter.get("/admin", authenticate, authorize(["ADMIN"]), getAll);
datveRouter.post("/", authenticate, createdatve, datghe);
datveRouter.delete("/:id", authenticate, removedatve);
datveRouter.put("/:id", authenticate, updatedatve);
datveRouter.get("/:id", authenticate, getDetaildatve);
module.exports = {
  datveRouter,
};
