"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ghes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      soghe: {
        type: Sequelize.INTEGER,
      },
      trangthai: {
        type: Sequelize.STRING,
      },
      lichChieuId: {
        type: Sequelize.INTEGER,
        references: {
          // Lien ket voi movies theo id
          model: "lichchieus",
          key: "id",
        },
      },
      datVeId: {
        type: Sequelize.INTEGER,
        references: {
          // Lien ket voi movies theo id
          model: "datves",
          key: "id",
        },
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
    await queryInterface.dropTable("ghes");
  },
};
