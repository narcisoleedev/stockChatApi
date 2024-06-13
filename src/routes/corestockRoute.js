const Express = require("express");
const router = Express.Router();
const corestockController = require("../controller/corestockController.js");

router.route("/intraday").get(corestockController.corestockControllerIntraday);
router.route("/daily").get(corestockController.corestockControllerDaily);
router.route("/weekly").get(corestockController.corestockControllerWeekly);
router.route("/monthly").get(corestockController.corestockControllerMonthly);

module.exports = router;
