const express = require("express");
const { rootRouters } = require("./routers/root.routers");
const path = require("path");
const app = express();
const cors = require("cors");
// setup static file để truy cập dc các file server
const publicPathDirectory = path.join(__dirname, "./public");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/public", express.static(publicPathDirectory));
// setup app sử dụng data dạng json
app.use(express.json());
app.use("/api", rootRouters);
/**
 * method : get
 * url : "/" <==> http://localhost:7000/
 */
app.get("/", (req, res) => {
  res.send("Hello word");
});
// app.all("/", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });
const port = 7000;
app.listen(port, () => {
  console.log(`app run on port ${port}`);
});
