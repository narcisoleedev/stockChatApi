const Express = require('express');
const router = Express.Router();
const authController = require('../controller/authController.js');

router.route('/').get(authController.authController);

module.exports = router;