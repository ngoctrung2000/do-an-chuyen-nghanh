"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ghe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ lichchieu, datve }) {
      // define association here
      this.belongsTo(datve);
      this.belongsTo(lichchieu); // phần Nhiều,mỗi cái cinema sẽ có 1 cineplex
    }
  }
  ghe.init(
    {
      soghe: DataTypes.INTEGER,
      trangthai: DataTypes.STRING,
      lichChieuId: DataTypes.INTEGER,
      datVeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ghe",
    }
  );
  return ghe;
};
