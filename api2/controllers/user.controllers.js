const { User } = require("../models");
const bcryptjs = require("bcryptjs");

const getListUsers = async (req, res) => {
  try {
    const userList = await User.findAll();
    res.status(200).send(userList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailUser = async (req, res) => {
  const { id } = req.params;
  // tìm user phù hợp và res về client
  try {
    const userDetail = await User.findByPk(id);
    if (userDetail) {
      res.status(200).send(userDetail);
    } else {
      res.status(404).send("Not Found!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const createUser = async (req, res) => {
  const { name, email, password, phone, age, role } = req.body;
  try {
    // tạo ra một chuỗi ngẫu nhiên
    const salt = bcryptjs.genSaltSync(10);
    // mã hóa password + salt
    const hashPassword = bcryptjs.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      phone,
      age,
      role,
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("Xóa Thành Công");
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, phone, age, role } = req.body;
  try {
    const [countUpdate] = await User.update(
      { name, email, password, phone, age, role },
      {
        where: {
          // id : id,
          id,
        },
      }
    );
    if (countUpdate > 0) {
      res.status(200).send("Update Success");
    } else {
      res.status(404).send("Not Found!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const uploadAvatar = async (req, res) => {
  const { file, tokenDecode } = req;
  console.log(req.body);
  const urlImage = `http://localhost:7000/${file.path}`;
  try {
    const userDetail = await User.findByPk(tokenDecode.id);
    userDetail.avatar = urlImage;
    await userDetail.save();
    res.status(200).send(userDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getListUsers,
  getDetailUser,
  createUser,
  removeUser,
  updateUser,
  uploadAvatar,
};
