const Express = require('express');
const router = Express.Router();
const loginController = require("../controller/loginController.js");

router.route("/").post(loginController);

module.exports = router;
