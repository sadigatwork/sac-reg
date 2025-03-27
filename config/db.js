// Set up mongoose connection
const mongoose = require("mongoose");
const db =
  "mongodb+srv://Sadig:sadig123@cluster0.ubjuy.mongodb.net/sac-reg?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.set("strictQuery", true, "useNewUrlParser", true);
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
