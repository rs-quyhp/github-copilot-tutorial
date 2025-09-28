const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://quyhp:ShikamaruBH71@cluster0.4pjpg.mongodb.net/githubcopilot"; // Change as needed

let isConnected = false;

async function connectDB() {
  if (!isConnected) {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  }
}

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

function closeDB() {
  isConnected = false;
  return mongoose.connection.close();
}

module.exports = {
  db,
  connectDB,
  closeDB,
};
