const { Cinema, Cineplex, sequelize } = require("../models");
const getAll = async (req, res) => {
  try {
    const cinemaList = await Cinema.findAll({
      include: [
        {
          model: Cineplex,
        },
      ],
    });
    res.status(200).send(cinemaList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCinemasByCineplex = async (req, res) => {
  const { id, name } = req.query;
  console.log(id, name);
  try {
    const [result] = await sequelize.query(`
      select cinemas.name , cinemas.image from cinemas
      inner join cineplexes
      on cineplexes.id = cinemas.cineplexId
      where cineplexes.id = 1
    `);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getQuery = async (req, res) => {
  const { id, name } = req.query;
  console.log(id, name);
  try {
    const [result] = await sequelize.query(`
      select Users.email , movies.tenphim from movies
      inner join users
      on Users.id = movies.id
     
    `);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAll,
  getCinemasByCineplex,
  getQuery,
};
