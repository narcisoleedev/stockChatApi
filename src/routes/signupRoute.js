const Express = require('express');
const router = Express.Router();
const signupController = require("../controller/signupController.js");

router.route("/").post(signupController);

module.exports = router;
