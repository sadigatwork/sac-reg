const express = require("express");
const router = express.Router();

const certificate_controller = require("../../../controllers/certificateController");
/// CERTIFICATE ROUTES ///

// GET request for creating a Certificate. NOTE This must come before route that displays Certificate (uses id).
router.get("/create", certificate_controller.certificate_create_get);

//POST request for creating Certificate.
router.post("/create", certificate_controller.certificate_create_post);

// GET request to delete Certificate.
router.get("/:id/delete", certificate_controller.certificate_delete_get);

// POST request to delete Certificate.
router.post("/:id/delete", certificate_controller.certificate_delete_post);

// GET request to update Certificate.
router.get("/:id/update", certificate_controller.certificate_update_get);

// POST request to update Certificate.
router.post("/:id/update", certificate_controller.certificate_update_post);

// GET request for one Certificate.
router.get("/:id", certificate_controller.certificate_detail);

// GET request for list of all Certificate.
router.get("/certificates", certificate_controller.certificate_list);

module.exports = router;
