const Registrant = require("../models/registrant");
const University = require("../models/university");
const Certificate = require("../models/certificate");
// const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  // Get details of books, book instances, aertificates and genre counts (in parallel)
  const [
    numRegistrants,
    // numBookInstances,
    // numAvailableBookInstances,
    numCertificates,
    numUniversities,
  ] = await Promise.all([
    Registrant.countDocuments({}).exec(),
    // BookInstance.countDocuments({}).exec(),
    // BookInstance.countDocuments({ status: "Available" }).exec(),
    Certificate.countDocuments({}).exec(),
    University.countDocuments({}).exec(),
  ]);

  res.render("index", {
    title: "SAC Registration Home",
    registrant_count: numRegistrants,
    // book_instance_count: numBookInstances,
    // book_instance_available_count: numAvailableBookInstances,
    certificate_count: numCertificates,
    university_count: numUniversities,
  });
});

// Display list of all Registrants.
exports.registrant_list = asyncHandler(async (req, res, next) => {
  // const allRegistrants = await Registrant.find({}, "first_name certificate")
  // const allRegistrants = await Registrant.find({}, "full_name")
  const allRegistrants = await Registrant.find({}, {})
    .sort({ full_name: 1 })
    .lean()
    // .populate("certificate")
    .exec();
  console.log(allRegistrants);

  res.render("registrant_list", {
    title: "Registrant List",
    registrant_list: allRegistrants,
  });
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
