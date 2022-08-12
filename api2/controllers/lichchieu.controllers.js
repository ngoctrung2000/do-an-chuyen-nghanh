const { lichchieu, movies, ghe } = require("../models");
const getAllLichChieu = async (req, res) => {
  try {
    const cinemaList = await movies.findAll({
      include: [
        {
          model: lichchieu,
        },
      ],
    });
    res.status(200).send(cinemaList);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetailPhimLichChieu = async (req, res) => {
  const { id } = req.params;
  try {
    const cinemaList = await movies.findAll({
      include: [
        {
          model: lichchieu,
        },
      ],
      where: {
        id,
      },
    });
    res.status(200).send(cinemaList);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getAllLichChieuTheLoai = (message) => async (req, res) => {
  try {
    const cinemaList = await movies.findAll({
      include: [
        {
          model: lichchieu,
        },
      ],
      where: {
        theloai: message,
      },
    });
    res.status(200).send(cinemaList);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getAllLichChieuAdmin = async (req, res) => {
  try {
    const cinemaList = await lichchieu.findAll({
      include: [
        {
          model: movies,
        },
      ],
    });
    res.status(200).send(cinemaList);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetailLichChieu = async (req, res) => {
  const { id } = req.params;

  try {
    const cinemaList = await lichchieu.findAll({
      include: [
        {
          model: movies,
        },
        {
          model: ghe,
        },
      ],
      // include: [
      //   {
      //     model: ghe,
      //   },
      // ],
      where: {
        id,
      },
    });
    res.status(200).send(cinemaList);
  } catch (error) {
    res.status(500).send(error);
  }
};
const createLichChieu = async (req, res, next) => {
  const { giochieu, ngaychieu, rapchieu, movieId } = req.body;
  try {
    const newLichChieu = await lichchieu.create({
      giochieu,
      ngaychieu,
      rapchieu,
      movieId,
    });
    res.status(200).send(newLichChieu);
    req.lichchieuInFo = newLichChieu.dataValues; //lay data vua insert truyen len req
    next();
  } catch (error) {
    res.status(500).send(error);
  }
};
const removeLichChieu = async (req, res) => {
  const { id } = req.params;
  try {
    await lichchieu.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("Xóa Thành Công");
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateLichChieu = async (req, res) => {
  const { id } = req.params;
  const { giochieu, ngaychieu, rapchieu, movieId } = req.body;
  try {
    const [countUpdate] = await lichchieu.update(
      { giochieu, ngaychieu, rapchieu, movieId },
      {
        where: {
          // id : id,
          id,
        },
      }
    );
    if (countUpdate > 0) {
      res.status(200).send("Update Success");
      req.lichChieuId = id; //lay data vua insert truyen len req
      next();
    } else {
      res.status(404).send("Not Found!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const createBulkGhe = async (req, res) => {
  const { lichchieuInFo } = req; //nhan lichchieuinfo tu req do ham createLichChieu truyen len
  const lichChieuId = lichchieuInFo.id;
  let list = new Array();
  for (var i = 1; i < 21; i++)
    list.push({
      soghe: i,
      trangthai: "chuadat",
      lichChieuId,
      datVeId: null,
    });
  console.log("lich chieu info: ", lichChieuId);
  try {
    const listGhe = await ghe.bulkCreate(list);
    res.status(200).send(listGhe);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateBulkGhe = async (req, res) => {
  const { lichChieuId } = req; //nhan lichchieuinfo tu req do ham createLichChieu truyen len
  console.log("lich chieu id update", lichChieuId);
  let list = new Array();
  // for (var i = 1; i < 21; i++)
  //   list.push({
  //     soghe: i,
  //     trangthai: "chuadat",
  //     lichChieuId,
  //     datVeId: null,
  //   });
  console.log("lich chieu info: ", lichChieuId);
  try {
    // const listGhe = await ghe.bulkCreate(list);
    // res.status(200).send(listGhe);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  getAllLichChieu,
  getAllLichChieuTheLoai,
  createLichChieu,
  removeLichChieu,
  updateLichChieu,
  getDetailPhimLichChieu,
  getDetailLichChieu,
  getAllLichChieuAdmin,
  createBulkGhe,
  updateBulkGhe,
};
