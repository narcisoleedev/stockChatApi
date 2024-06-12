const Express = require('express');
const router = Express.Router();
const databaseController = require('../controller/databaseController.js');

router.route("/intraday").get(databaseController.databaseControllerDrop);
router.route("/daily").get(databaseController.databaseControllerCreate);
router.route("/weekly").get(databaseController.databaseControllerTruncate);
router.route("/monthly").get(databaseController.databaseControllerLog);

module.exports = router;