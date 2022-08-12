const { movies } = require("../models");
const bcryptjs = require("bcryptjs");

//lay danh sach phim (get)
//api:{{url}}/api/movies/
const getListMovie = async (req, res) => {
  try {
    const movieList = await movies.findAll();
    res.status(200).send(movieList);
  } catch (error) {
    res.status(500).send(error);
  }
};

//them phim (post)
//api:{{url}}/api/movies/
const createMovie = async (req, res) => {
  const { tenphim, mota, theloai, hinhanh } = req.body;
  console.log(req);
  const { file } = req;
  const urlImage = `http://localhost:7000/${file.path}`;
  try {
    const newFilm = await movies.create({
      tenphim,
      mota,
      theloai,
      hinhanh: urlImage,
    });
    res.status(201).send(newFilm);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetailFilm = async (req, res) => {
  const { id } = req.params;
  // tìm user phù hợp và res về client
  console.log(id);
  try {
    const movieDetail = await movies.findByPk(id);
    if (movieDetail) {
      res.status(200).send(movieDetail);
    } else {
      res.status(404).send("Not Found!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const getTheLoaiFilm = (message) => async (req, res) => {
  const { name } = req.params;
  console.log(message);
  try {
    const movieList = await movies.findAll({
      limit: 4,
      where: {
        theloai: message,
      },
    });

    res.status(200).send(movieList);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateFilm = async (req, res) => {
  const { id } = req.params;
  const { file } = req;
  const urlImage = `http://localhost:7000/${file.path}`;
  const { tenphim, mota, theloai, hinhanh } = req.body;
  try {
    const [countUpdate] = await movies.update(
      { tenphim, mota, theloai, hinhanh: urlImage },
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
const removeFilm = async (req, res) => {
  const { id } = req.params;
  try {
    await movies.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("Xóa Thành Công");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getListMovie,
  createMovie,
  getDetailFilm,
  getTheLoaiFilm,
  updateFilm,
  removeFilm,
};
