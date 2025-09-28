const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  clinicals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Clinical" }],
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
