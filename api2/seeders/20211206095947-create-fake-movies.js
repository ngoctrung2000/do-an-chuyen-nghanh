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
      "movies",
      [
        {
          tenphim: "Doctor Strange 3",
          mota: "Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures",
          theloai: "phimle",
          hinhanh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/doctor-strange-3_gp01.jfif",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          tenphim: "Dế mèn phiêu lưu kí",
          mota: "Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures",
          theloai: "phimle",
          hinhanh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/de-men-phieu-luu-ki_gp01.jpg",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          tenphim: "La la land",
          mota: "Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures",
          theloai: "phimle",
          hinhanh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/la-la-land_gp01.jpg",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          tenphim: "Trạng Tí Phiêu Lưu Ký ",
          mota: "Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures",
          theloai: "phimle",
          hinhanh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/trang-ti-phieu-luu-ky-123123_gp01.png",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          tenphim: "What If",
          mota: "Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures",
          theloai: "phimle",
          hinhanh: "http://movie0706.cybersoft.edu.vn/hinhanh/what-if_gp01.jpg",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          tenphim: "Minion",
          mota: "Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures",
          theloai: "phimle",
          hinhanh: "http://movie0706.cybersoft.edu.vn/hinhanh/minion_gp01.jpg",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          tenphim: "Spider-Man: No Way Home",
          mota: "Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures",
          theloai: "phimle",
          hinhanh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/spider-man-no-way-home_gp01.jpg",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          tenphim: "Homie",
          mota: "Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures",
          theloai: "phimle",
          hinhanh: "http://movie0706.cybersoft.edu.vn/hinhanh/home.jpg",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          tenphim: "Batman v Superman: Dawn of Justice 1",
          mota: "Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures",
          theloai: "phimle",
          hinhanh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/batman-v-superman-dawn-of-justice_gp02.jpg",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          tenphim: "Ant-Man",
          mota: "Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures",
          theloai: "phimle",
          hinhanh: "http://movie0706.cybersoft.edu.vn/hinhanh/antman.jpg",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          tenphim: "Mắt Biếc",
          mota: "Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures",
          theloai: "phimle",
          hinhanh:
            "http://movie0706.cybersoft.edu.vn/hinhanh/jurassicworld.jpg",
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
    await queryInterface.bulkDelete("movies", null, {});
  },
};
