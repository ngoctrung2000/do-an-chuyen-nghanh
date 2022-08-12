const { User, datve, ghe } = require("../models");
const getAllDatVe = async (req, res) => {
  try {
    const cinemaList = await User.findAll({
      include: [
        {
          model: datve,
        },
      ],
    });
    res.status(200).send(cinemaList);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getAll = async (req, res) => {
  try {
    const cinemaList = await datve.findAll({
      include: [
        {
          model: User,
        },
      ],
    });
    res.status(200).send(cinemaList);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetaildatve = async (req, res) => {
  const { id } = req.params;

  try {
    const cinemaList = await User.findAll({
      include: [
        {
          model: datve,
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
const createdatve = async (req, res, next) => {
  const {
    soluong,
    tenphim,
    giochieu,
    ngaychieu,
    rapchieu,
    userId,
    giave,
    soghe,
    idghe,
  } = req.body;
  try {
    const newdatve = await datve.create({
      soluong,
      tenphim,
      giochieu,
      ngaychieu,
      rapchieu,
      userId,
      giave,
      soghe,
    });
    res.status(200).send(newdatve);
    req.dataDatve = newdatve.dataValues;

    next();
  } catch (error) {
    res.status(500).send(error);
  }
};
const datghe = async (req, res) => {
  const trangthai = "dadat";
  try {
    const { dataDatve } = req;
    const { idghe } = req.body;
    const datVeId = dataDatve.id;
    console.log("datveid ", datVeId);
    console.log("idghe ", idghe);
    const [countUpdate] = await ghe.update(
      { trangthai, datVeId },
      {
        where: {
          // id : id,
          id: idghe,
        },
      }
    );
    if (countUpdate > 0) {
      res.status(200).send("Update ghe Success");
    } else {
      res.status(404).send("Not Found!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const removedatve = async (req, res) => {
  const { id } = req.params;
  try {
    await datve.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("Xóa Thành Công");
  } catch (error) {
    res.status(500).send(error);
  }
};
const updatedatve = async (req, res) => {
  const { id } = req.params;
  const {
    soluong,
    tenphim,
    giochieu,
    ngaychieu,
    rapchieu,
    userId,
    giave,
    soghe,
  } = req.body;
  try {
    const [countUpdate] = await datve.update(
      { soluong, tenphim, giochieu, ngaychieu, rapchieu, userId, giave, soghe },
      {
        where: {
          // id : id,
          id,
        },
      }
    );
    if (countUpdate > 0) {
      res.status(200).send("Update Success");
    } else {
      res.status(404).send("Not Found!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  getAllDatVe,
  getDetaildatve,
  createdatve,
  removedatve,
  updatedatve,
  getAll,
  datghe,
};
