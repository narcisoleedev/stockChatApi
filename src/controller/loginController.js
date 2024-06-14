require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginModel = require("../model/loginModel.js");
const signupPost = require("./signupController.js");

const loginPost = async (req, res) => {
  try {
    const user = {
      cpf: req.body.cpf,
      password: req.body.password,
    };
    const modelResponse = await loginModel.loginModelFunc(user);
    if (modelResponse === null) {
      return res.status(500).json("postgres error");
    } else {
      if (modelResponse.rowCount == 0) {
        return res.status(404).json("user not found");
      }
      bcrypt.compare(
        user.password,
        modelResponse.rows[0].password,
        (errCRY, responseCRY) => {
          if (!errCRY) {
            if (responseCRY) {
              const token = jwt.sign(
                { cpf: user.cpf },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "2m" },
              );
              return res.status(200).json({ token: token });
            } else {
              return res.status(401).json({ msg: "wrong password" });
            }
          }
        },
      );
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = loginPost;
