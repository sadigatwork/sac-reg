const express = require("express");
const router = express.Router();

// Require controller modules.
const registrant_controller = require("../controllers/registrantController");
const university_controller = require("../controllers/universityController");
const certificate_controller = require("../controllers/certificateController");

/// BOOK ROUTES ///

// GET catalog home page.
router.get("/", registrant_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/registrant/create", registrant_controller.registrant_create_get);

// POST request for creating Book.
router.post("/registrant/create", registrant_controller.registrant_create_post);

// GET request to delete Book.
router.get(
  "/registrant/:id/delete",
  registrant_controller.registrant_delete_get
);

// POST request to delete Book.
router.post(
  "/registrant/:id/delete",
  registrant_controller.registrant_delete_post
);

// GET request to update Book.
router.get(
  "/registrant/:id/update",
  registrant_controller.registrant_update_get
);

// POST request to update Book.
router.post(
  "/registrant/:id/update",
  registrant_controller.registrant_update_post
);

// GET request for one Book.
router.get("/registrant/:id", registrant_controller.registrant_detail);

// GET request for list of all Book items.
router.get("/registrants", registrant_controller.registrant_list);

/// University ROUTES ///

// GET request for creating University. NOTE This must come before route for id (i.e. display university).
router.get("/university/create", university_controller.university_create_get);

// POST request for creating University.
router.post("/university/create", university_controller.university_create_post);

// GET request to delete University.
router.get(
  "/university/:id/delete",
  university_controller.university_delete_get
);

// POST request to delete University.
router.post(
  "/university/:id/delete",
  university_controller.university_delete_post
);

// GET request to update University.
router.get(
  "/university/:id/update",
  university_controller.university_update_get
);

// POST request to update University.
router.post(
  "/university/:id/update",
  university_controller.university_update_post
);

// GET request for one University.
router.get("/university/:id", university_controller.university_detail);

// GET request for list of all Universitys.
router.get("/universitys", university_controller.university_list);

/// CERTIFICATE ROUTES ///

// GET request for creating a Certificate. NOTE This must come before route that displays Certificate (uses id).
router.get(
  "/certificate/create",
  certificate_controller.certificate_create_get
);

//POST request for creating Certificate.
router.post(
  "/certificate/create",
  certificate_controller.certificate_create_post
);

// GET request to delete Certificate.
router.get(
  "/certificate/:id/delete",
  certificate_controller.certificate_delete_get
);

// POST request to delete Certificate.
router.post(
  "/certificate/:id/delete",
  certificate_controller.certificate_delete_post
);

// GET request to update Certificate.
router.get(
  "/certificate/:id/update",
  certificate_controller.certificate_update_get
);

// POST request to update Certificate.
router.post(
  "/certificate/:id/update",
  certificate_controller.certificate_update_post
);

// GET request for one Certificate.
router.get("/certificate/:id", certificate_controller.certificate_detail);

// GET request for list of all Certificate.
router.get("/certificates", certificate_controller.certificate_list);

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
