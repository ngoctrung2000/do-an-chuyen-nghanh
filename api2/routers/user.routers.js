const express = require("express");
const {
  getListUsers,
  getDetailUser,
  createUser,
  removeUser,
  updateUser,
  uploadAvatar,
} = require("../controllers/user.controllers");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/verify-token.middleware");
const { logger } = require("../middlewares/log/logger.middlewares");
const {
  uploadImageSingle,
} = require("../middlewares/uploads/upload-image.middlewares");
const {
  checkExist,
} = require("../middlewares/validations/checkExist.middlewares");
const { User } = require("../models");

const userRouters = express.Router();
// xây dựng api quản lý người dùng
// upload image
userRouters.post(
  "/upload-avatar",
  authenticate,
  uploadImageSingle("avatar"),
  uploadAvatar
);
/**
 * api : lấy tất cả người dùng
 *    url : '/api/users/get-list-user'
 *    method : get
 */
userRouters.get(
  "/",
  logger("lấy tất cả người dùng"),
  authenticate,
  authorize(["ADMIN"]),
  getListUsers
);
/**
 * api : lấy chi tiết một người dùng
 *    url : '/api/users/get-detail-user/:id'
 *    method : get
 */
userRouters.get("/:id", logger("lấy chi tiết một người dùng"), getDetailUser);
/**
 * api : tạo mới user
 *    url : '/api/users/create-user'
 *    method : post,
 *    data : { email , name }
 */
userRouters.post("/", authenticate, authorize(["ADMIN"]), createUser);
//userRouters.post("/", authenticate, createUser);

userRouters.delete(
  "/:id",
  checkExist(User),
  authenticate,
  authorize(["ADMIN"]),
  removeUser
);

userRouters.put(
  "/:id",
  checkExist(User),
  authenticate,
  authorize(["ADMIN"]),
  updateUser
);

module.exports = {
  userRouters,
};
