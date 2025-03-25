const Registrant = require("../models/registrant");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Registrant index");
  // Get details of books, book instances, authors and genre counts (in parallel)
  // const [
  //   numBooks,
  //   numBookInstances,
  //   numAvailableBookInstances,
  //   numAuthors,
  //   numGenres,
  // ] = await Promise.all([
  //   Book.countDocuments({}).exec(),
  //   BookInstance.countDocuments({}).exec(),
  //   BookInstance.countDocuments({ status: "Available" }).exec(),
  //   Author.countDocuments({}).exec(),
  //   Genre.countDocuments({}).exec(),
  // ]);

  // res.render("index", {
  //   title: "Local Library Home",
  //   book_count: numBooks,
  //   book_instance_count: numBookInstances,
  //   book_instance_available_count: numAvailableBookInstances,
  //   author_count: numAuthors,
  //   genre_count: numGenres,
  // });
});

// Display list of all Registrants.
exports.registrant_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Registrant list");
});

// Display detail page for a specific Registrant.
exports.registrant_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Registrant detail: ${req.params.id}`);
});

// Display Registrant create form on GET.
exports.registrant_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Registrant create GET");
});

// Handle Registrant create on POST.
exports.registrant_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Registrant create POST");
});

// Display Registrant delete form on GET.
exports.registrant_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Registrant delete GET");
});

// Handle Registrant delete on POST.
exports.registrant_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Registrant delete POST");
});

// Display Registrant update form on GET.
exports.registrant_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Registrant update GET");
});

// Handle Registrant update on POST.
exports.registrant_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Registrant update POST");
});
