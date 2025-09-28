const express = require("express");
const cors = require("cors");
const clinicalRoutes = require("./routes/clinicalRoutes");
const patientRoutes = require("./routes/patientRoutes");
const db = require("./db/database");
const app = express();
const PORT = process.env.PORT || 3000;
const http = require("http");

db.connectDB();

app.use(cors());
app.use(express.json());

// Mount API routes
app.use("/api/clinicals", clinicalRoutes);
app.use("/api/patients", patientRoutes);

const server = http.createServer(app);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, close: () => server.close() };
