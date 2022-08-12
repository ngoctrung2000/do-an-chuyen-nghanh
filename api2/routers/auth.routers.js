const express = require("express");
const { signIn, signUp } = require("../controllers/auth.controllers");
const authRouter = express.Router();
//http://localhost:7000/api/auth/sign-in
authRouter.post("/sign-in", signIn);

authRouter.post("/sign-up", signUp);
module.exports = {
  authRouter,
};
