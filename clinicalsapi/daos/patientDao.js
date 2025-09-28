const Patient = require("../models/patient");

// Create a new patient
async function createPatient(patientData) {
  const patient = new Patient(patientData);
  return await patient.save();
}

// Get all patients
async function getAllPatients() {
  return await Patient.find();
}

// Get a patient by ID
async function getPatientById(id) {
  return await Patient.findById(id);
}

// Update a patient by ID
async function updatePatient(id, updateData) {
  return await Patient.findByIdAndUpdate(id, updateData, { new: true });
}

// Delete a patient by ID
async function deletePatient(id) {
  return await Patient.findByIdAndDelete(id);
}

module.exports = {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
};
