"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class lichchieu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
    static associate({ movies, ghe }) {
      // define association here
      this.belongsTo(movies);
      this.hasMany(ghe);
    }
  }
  lichchieu.init(
    {
      giochieu: DataTypes.STRING,
      ngaychieu: DataTypes.STRING,
      rapchieu: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "lichchieu",
    }
  );
  return lichchieu;
};
