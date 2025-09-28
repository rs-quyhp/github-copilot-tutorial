const clinicalDao = require("../daos/clinicalDao");

// Create a new clinical record
async function createClinical(req, res) {
  try {
    const clinical = await clinicalDao.createClinical(req.body);
    res.status(201).json(clinical);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get all clinical records
async function getAllClinicals(req, res) {
  try {
    const clinicals = await clinicalDao.getAllClinicals();
    res.json(clinicals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get a clinical record by ID
async function getClinicalById(req, res) {
  try {
    const clinical = await clinicalDao.getClinicalById(req.params.id);
    if (!clinical) {
      return res.status(404).json({ error: "Clinical record not found" });
    }
    res.json(clinical);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update a clinical record by ID
async function updateClinical(req, res) {
  try {
    const clinical = await clinicalDao.updateClinical(req.params.id, req.body);
    if (!clinical) {
      return res.status(404).json({ error: "Clinical record not found" });
    }
    res.json(clinical);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete a clinical record by ID
async function deleteClinical(req, res) {
  try {
    const clinical = await clinicalDao.deleteClinical(req.params.id);
    if (!clinical) {
      return res.status(404).json({ error: "Clinical record not found" });
    }
    res.json({ message: "Clinical record deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createClinical,
  getAllClinicals,
  getClinicalById,
  updateClinical,
  deleteClinical,
};
