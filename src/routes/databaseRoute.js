const Express = require("express");
const router = Express.Router();
const databaseController = require("../controller/databaseController.js");

router.route("/drop").post(databaseController.databaseControllerDrop);
router.route("/create").post(databaseController.databaseControllerCreate);
router.route("/truncate").post(databaseController.databaseControllerTruncate);
router.route("/log").post(databaseController.databaseControllerLog);

module.exports = router;
