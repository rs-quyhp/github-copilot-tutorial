const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://quyhp:ShikamaruBH71@cluster0.4pjpg.mongodb.net/githubcopilot"; // Change as needed

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;
