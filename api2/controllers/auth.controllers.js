const { User } = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const signIn = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  /**
   * 2 bước đăng nhập :
   *  1/ tìm user theo email
   *  2/ so sánh password
   */
  try {
    const userLogin = await User.findOne({ where: { email } });
    if (userLogin) {
      // so sánh password
      const isAuth = bcryptjs.compareSync(password, userLogin.password);
      if (isAuth) {
        const payload = {
          id: userLogin.id,
          email: userLogin.email,
          role: userLogin.role,
        };
        const userId = payload.id;
        const secretKey = "haoPN";

        const token = jwt.sign(payload, secretKey, {
          expiresIn: 365 * 24 * 60 * 60,
        });
        //365 NGAY 24 tieng 60 phut 60 giay =1 nam
        //expiresIn la thoi gian het han cua token
        res
          .status(200)
          .send({ message: "Đăng nhập thành công!", email, token, userId });
      } else {
        res.status(400).send("Mật Khẩu Không chính xác");
      }
    } else {
      res.status(404).send("Not Found Email");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const signUp = async (req, res) => {
  const { name, email, password, phone, age } = req.body;
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
      role: "CLIENT",
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { signIn, signUp };
