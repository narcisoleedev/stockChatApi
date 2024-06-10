const bcrypt = require('bcrypt');

const signupModel = require("../model/signupModel.js");

const signupPost = async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = {
        name: req.body.name,
        email: req.body.email,
        cpf: req.body.cpf,
        password: hashedPassword,
      };
      const modelResponse = await signupModel.signupModelFunc(user);
      if (modelResponse === null)
        return res.status(500).json({ msg: "postgres error" });
      else {
        return res.status(201).json({ msg: "created user successfully" });
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  module.exports = signupPost;