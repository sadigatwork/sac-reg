var express = require("express");
var router = express.Router();

/* GET home page. */

router.get("/", function (req, res) {
  res.redirect("/registrant");
});

module.exports = router;
