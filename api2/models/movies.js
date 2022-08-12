"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ lichchieu }) {
      // define association here
      this.hasMany(lichchieu); //cineplex se co nhieu cenema  1 nhieu
    }
  }
  movies.init(
    {
      tenphim: DataTypes.STRING,
      mota: DataTypes.STRING,
      theloai: DataTypes.STRING,
      hinhanh: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "movies",
    }
  );
  return movies;
};
