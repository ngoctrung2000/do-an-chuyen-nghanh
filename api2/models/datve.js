"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class datve extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, ghe }) {
      // define association here
      this.belongsTo(User);
      this.hasOne(ghe);
    }
  }
  datve.init(
    {
      soluong: DataTypes.INTEGER,
      tenphim: DataTypes.STRING,
      giochieu: DataTypes.STRING,
      ngaychieu: DataTypes.STRING,
      rapchieu: DataTypes.INTEGER,
      giave: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      soghe: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "datve",
    }
  );
  return datve;
};
