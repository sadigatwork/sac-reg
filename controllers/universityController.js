const University = require("../models/university");
const asyncHandler = require("express-async-handler");

// Display list of all Universities.
exports.university_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: University list");
});

// Display detail page for a specific University.
exports.university_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: University detail: ${req.params.id}`);
});

// Display University create form on GET.
exports.university_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: University create GET");
});

// Handle University create on POST.
exports.university_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: University create POST");
});

// Display University delete form on GET.
exports.university_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: University delete GET");
});

// Handle University delete on POST.
exports.university_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: University delete POST");
});

// Display University update form on GET.
exports.university_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: University update GET");
});

// Handle University update on POST.
exports.university_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: University update POST");
});
