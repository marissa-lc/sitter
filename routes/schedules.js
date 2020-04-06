const router = require("express").Router();
const booksController = require("../../controllers/schedulesController");

// Matches with "/api/schedules"  WHY???
router.route("/")
  .get(schedulesController.findAll)
  .post(schedulesController.create);

// Matches with "/api/schedules/:day"
router
  .route("/:day")
  .get(schedulesController.findByDay)
  .put(schedulesController.update)
  .delete(schedulesController.remove);

module.exports = router;
