"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "ghes",
      // [
      //   {
      //     soluong: 1,
      //     tenphim: "What if",
      //     giochieu: "8:30",
      //     ngaychieu: "15/1/2021",
      //     rapchieu: 2,
      //     userId: 1,
      //     createdAt: "2021-06-10 21:30:35",
      //     updatedAt: "2021-06-10 21:30:35",
      //   },
      //   {
      //     soluong: 1,
      //     tenphim: "Doctor change 3",
      //     giochieu: "7:30",
      //     ngaychieu: "14/1/2021",
      //     rapchieu: 3,
      //     userId: 1,
      // createdAt: "2021-06-10 21:30:35",
      // updatedAt: "2021-06-10 21:30:35",
      //   },
      // ],
      [
        {
          soghe: 1,
          trangthai: "chuadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          soghe: 2,
          trangthai: "chuadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          soghe: 3,
          trangthai: "chuadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          soghe: 4,
          trangthai: "chuadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          soghe: 5,
          trangthai: "chuadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          soghe: 6,
          trangthai: "chuadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          soghe: 7,
          trangthai: "chuadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          soghe: 8,
          trangthai: "chuadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          soghe: 9,
          trangthai: "chuadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          soghe: 10,
          trangthai: "chuadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          soghe: 11,
          trangthai: "chuadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          soghe: 12,
          trangthai: "dadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          soghe: 13,
          trangthai: "dadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          soghe: 14,
          trangthai: "dadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          soghe: 15,
          trangthai: "dadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          soghe: 16,
          trangthai: "dadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          soghe: 17,
          trangthai: "dadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          soghe: 18,
          trangthai: "dadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          soghe: 19,
          trangthai: "dadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          soghe: 20,
          trangthai: "dadat",
          lichChieuId: 1,
          datVeId: null,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("ghes", null, {});
  },
};
