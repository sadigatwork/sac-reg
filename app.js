var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const connectDB = require("./config/db");

const cors = require("cors");
const bodyParser = require("body-parser");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var registrantRouter = require("./routes/api/v1/registrant");
var universityRouter = require("./routes/api/v1/university");
var certificateRouter = require("./routes/api/v1/certificate");

var app = express();

// Connect Database
connectDB();

// // Set up mongoose connection
// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);
// const mongoDB =
//   "mongodb+srv://Sadig:sadig123@cluster0.ubjuy.mongodb.net/sac-reg?retryWrites=true&w=majority&appName=Cluster0";

// main().catch((err) => console.log(err));
// async function main() {
//   await mongoose.connect(mongoDB);
// }

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// use the cors middleware with the
// origin and credentials options
app.use(cors({ origin: true, credentials: true }));

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use the routes module as a middleware
// for the /api/v1/ path
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/v1/registrant", registrantRouter);
app.use("/api/v1/university", universityRouter);
app.use("/api/v1/certificate", certificateRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
