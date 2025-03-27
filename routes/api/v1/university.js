const express = require("express");
const router = express.Router();
const university_controller = require("../../../controllers/universityController");

/// University ROUTES ///

// GET request for creating University. NOTE This must come before route for id (i.e. display university).
router.get("/create", university_controller.university_create_get);

// POST request for creating University.
router.post("/create", university_controller.university_create_post);

// GET request to delete University.
router.get("/:id/delete", university_controller.university_delete_get);

// POST request to delete University.
router.post("/:id/delete", university_controller.university_delete_post);

// GET request to update University.
router.get("/:id/update", university_controller.university_update_get);

// POST request to update University.
router.post("/:id/update", university_controller.university_update_post);

// GET request for one University.
router.get("/:id", university_controller.university_detail);

// GET request for list of all Universitys.
router.get("/universitys", university_controller.university_list);

module.exports = router;
