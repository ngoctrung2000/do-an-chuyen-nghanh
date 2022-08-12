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
      "lichchieus",
      [
        {
          giochieu: "8:30",
          ngaychieu: "15/1/2021",
          rapchieu: 8,
          movieId: 1,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          giochieu: "10:30",
          ngaychieu: "10/1/2021",
          rapchieu: 1,
          movieId: 1,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          giochieu: "13:30",
          ngaychieu: "15/1/2021",
          rapchieu: 2,
          movieId: 2,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          giochieu: "14:30",
          ngaychieu: "10/1/2021",
          rapchieu: 7,
          movieId: 2,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          giochieu: "8:30",
          ngaychieu: "11/1/2021",
          rapchieu: 3,
          movieId: 3,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          giochieu: "10:30",
          ngaychieu: "11/1/2021",
          rapchieu: 4,
          movieId: 3,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          giochieu: "19:30",
          ngaychieu: "11/1/2021",
          rapchieu: 8,
          movieId: 4,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          giochieu: "9:30",
          ngaychieu: "12/1/2021",
          rapchieu: 6,
          movieId: 5,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          giochieu: "19:30",
          ngaychieu: "12/1/2021",
          rapchieu: 7,
          movieId: 6,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          giochieu: "11:00",
          ngaychieu: "14/1/2021",
          rapchieu: 1,
          movieId: 7,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          giochieu: "18:30",
          ngaychieu: "14/1/2021",
          rapchieu: 2,
          movieId: 8,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          giochieu: "21:30",
          ngaychieu: "8/1/2021",
          rapchieu: 3,
          movieId: 9,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          giochieu: "20:00",
          ngaychieu: "9/1/2021",
          rapchieu: 8,
          movieId: 10,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          giochieu: "10:30",
          ngaychieu: "5/1/2021",
          rapchieu: 4,
          movieId: 11,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          giochieu: "19:30",
          ngaychieu: "6/1/2021",
          rapchieu: 8,
          movieId: 12,
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
    await queryInterface.bulkDelete("lichchieus", null, {});
  },
};
