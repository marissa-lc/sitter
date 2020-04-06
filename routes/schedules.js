const router = require("express").Router();
const schedulesController = require("../../controllers/schedulesController");

// Matches with "/api/schedules"  WHY???
router.route("/")
console.log("ROUTER /")
  .get(schedulesController.findAll)
  .post(schedulesController.create);

// Matches with "/api/schedules/:day"
router.route("/:day")
  console.log("ROUTER /")
  .get(schedulesController.findByDay)
  .put(schedulesController.update)
  .delete(schedulesController.remove);

module.exports = router;
