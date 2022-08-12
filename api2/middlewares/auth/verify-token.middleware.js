const jwt = require("jsonwebtoken");

// kiểm tra xem người dùng đã đăng nhập hay chưa
const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const secretKey = "haoPN";
    const decode = jwt.verify(token, secretKey);
    console.log(req);
    req.tokenDecode = decode;
    console.log("tokendecode", req.tokenDecode);
    next();
  } catch (error) {
    res.status(401).send("Bạn chưa đăng nhập");
  }
};

// phần quyền
// userTypeArray = ["admin", "client"]
// 1. "admin" --> "admin" = user.userType ==> next()
// 2. "client" --> "client" = user.userType = Next()
const authorize = (userTypeArray) => {
  return (req, res, next) => {
    const { tokenDecode } = req;
    console.log("tokenDecode", tokenDecode);
    const dk =
      userTypeArray.findIndex((type) => {
        return type === tokenDecode.role;
      }) > -1;
    if (dk) {
      return next();
    } else {
      res.status(403).send({
        message: "Bạn đã đăng nhập , nhưng không có đủ quyền",
      });
    }
  };
};

module.exports = {
  authenticate,
  authorize,
};
