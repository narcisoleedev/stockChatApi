const Express = require('express');
const router = Express.Router();
const corestockController = require('../controller/corestockController.js');

router.route("/intraday").get(databaseController.corestockControllerIntraday);
router.route("/daily").get(databaseController.corestockControllerDaily);
router.route("/weekly").get(databaseController.corestockControllerWeekly);
router.route("/monthly").get(databaseController.corestockControllerMonthly);

module.exports = router;