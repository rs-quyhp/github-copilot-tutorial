const express = require("express");
const clinicalRoutes = require("./routes/clinicalRoutes");
const patientRoutes = require("./routes/patientRoutes");
const connectDB = require("./db/database");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mount API routes
app.use("/api/clinicals", clinicalRoutes);
app.use("/api/patients", patientRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("API is running");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
