const patientDao = require("../daos/patientDao");

// Create a new patient
async function createPatient(req, res) {
  try {
    const patient = await patientDao.createPatient(req.body);
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get all patients
async function getAllPatients(req, res) {
  try {
    const patients = await patientDao.getAllPatients();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get a patient by ID
async function getPatientById(req, res) {
  try {
    const patient = await patientDao.getPatientById(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update a patient by ID
async function updatePatient(req, res) {
  try {
    const patient = await patientDao.updatePatient(req.params.id, req.body);
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete a patient by ID
async function deletePatient(req, res) {
  try {
    const patient = await patientDao.deletePatient(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.json({ message: "Patient deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
};
