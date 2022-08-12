const mkdirp = require("mkdirp");
const multer = require("multer");

const uploadImageSingle = (type) => {
  // tạo đường dẫn thư mục
  mkdirp.sync(`./public/images/${type}`);
  // setup đường dẫn lưu file
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/images/${type}`); // đường dẫn thư mục để lưu file
    },
    filename: function (req, file, cb) {
      // thêm Date.now() vào để tránh tên file bị trùng
      cb(null, Date.now() + "_" + file.originalname); // đặt tên cho file
    },
  });

  const upload = multer({
    storage,
  });
  return upload.single(type);
};

module.exports = {
  uploadImageSingle,
};
