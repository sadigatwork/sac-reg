const Certificate = require("../models/certificate");
const asyncHandler = require("express-async-handler");

// Display list of all Certificates.
exports.certificate_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Certificate list");
});

// Display detail page for a specific Certificate.
exports.certificate_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Certificate detail: ${req.params.id}`);
});

// Display Certificate create form on GET.
exports.certificate_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Certificate create GET");
});

// Handle Certificate create on POST.
exports.certificate_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Certificate create POST");
});

// Display Certificate delete form on GET.
exports.certificate_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Certificate delete GET");
});

// Handle Certificate delete on POST.
exports.certificate_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Certificate delete POST");
});

// Display Certificate update form on GET.
exports.certificate_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Certificate update GET");
});

// Handle Certificate update on POST.
exports.certificate_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Certificate update POST");
});
