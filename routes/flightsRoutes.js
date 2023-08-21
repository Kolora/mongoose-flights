const express = require("express");

const router = express.Router();

const flightsController = require("../controllers/flightsController");
//INDUCES
// "index" route GET
router.get("/", flightsController.index);

// "new" route GET
router.get("/new", flightsController.new);

// "clear" route
router.delete("/clear", flightsController.clear);

// "destroy" route
router.delete("/:id", flightsController.destroy);

// "update" route PUT
router.put("/:id", flightsController.update);

// "create" route POST
router.post("/", flightsController.create);

// "edit" route
router.get("/:id/edit", flightsController.edit);
router.put("/update/:id", flightsController.updateDestination);
// "Show" route GET
router.get("/:id", flightsController.show);

module.exports = router;
