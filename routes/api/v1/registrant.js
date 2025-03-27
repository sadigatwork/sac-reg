const express = require("express");
const router = express.Router();

// Require controller modules.
const registrant_controller = require("../../../controllers/registrantController");

/// BOOK ROUTES ///

// GET catalog home page.
// @route   GET api/books
// @desc    Get all books
// @access  Public
router.get("/", registrant_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/create", registrant_controller.registrant_create_get);

// POST request for creating Book.
// @route   POST api/books
// @desc    Add/save book
// @access  Public
router.post("/create", registrant_controller.registrant_create_post);

// GET request to delete Book.
router.get("/:id/delete", registrant_controller.registrant_delete_get);

// POST request to delete Book.
router.post("/:id/delete", registrant_controller.registrant_delete_post);

// GET request to update Book.
// @route   PUT api/books/:id
// @desc    Update book by id
// @access  Public
router.get("/:id/update", registrant_controller.registrant_update_get);

// POST request to update Book.
router.post("/:id/update", registrant_controller.registrant_update_post);

// GET request for one Book.
// @route   GET api/books/:id
// @desc    Get single book by id
// @access  Public
router.get("/:id", registrant_controller.registrant_detail);

// GET request for list of all Book items.
router.get("/registrants", registrant_controller.registrant_list);
module.exports = router;

// /// BOOKINSTANCE ROUTES ///

// // GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
// router.get(
//   "/registrantinstance/create",
//   registrant_instance_controller.registrantinstance_create_get
// );

// // POST request for creating BookInstance.
// router.post(
//   "/registrantinstance/create",
//   registrant_instance_controller.registrantinstance_create_post
// );

// // GET request to delete BookInstance.
// router.get(
//   "/registrantinstance/:id/delete",
//   registrant_instance_controller.registrantinstance_delete_get
// );

// // POST request to delete BookInstance.
// router.post(
//   "/registrantinstance/:id/delete",
//   registrant_instance_controller.registrantinstance_delete_post
// );

// // GET request to update BookInstance.
// router.get(
//   "/registrantinstance/:id/update",
//   registrant_instance_controller.registrantinstance_update_get
// );

// // POST request to update BookInstance.
// router.post(
//   "/registrantinstance/:id/update",
//   registrant_instance_controller.registrantinstance_update_post
// );

// // GET request for one BookInstance.
// router.get(
//   "/registrantinstance/:id",
//   registrant_instance_controller.registrantinstance_detail
// );

// // GET request for list of all BookInstance.
// router.get(
//   "/registrantinstances",
//   registrant_instance_controller.registrantinstance_list
// );

module.exports = router;
