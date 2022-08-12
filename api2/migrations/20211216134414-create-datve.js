"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("datves", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      soluong: {
        type: Sequelize.INTEGER,
      },
      tenphim: {
        type: Sequelize.STRING,
      },
      giochieu: {
        type: Sequelize.STRING,
      },
      ngaychieu: {
        type: Sequelize.STRING,
      },
      rapchieu: {
        type: Sequelize.INTEGER,
      },
      giave: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          // Lien ket voi movies theo id
          model: "Users",
          key: "id",
        },
      },
      soghe: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("datves");
  },
};
