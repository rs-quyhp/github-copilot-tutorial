const express = require("express");
const clinicalController = require("../controllers/clinicalController");

const router = express.Router();

// Create a new clinical record
router.post("/", clinicalController.createClinical);

// Get all clinical records
router.get("/", clinicalController.getAllClinicals);

// Get a clinical record by ID
router.get("/:id", clinicalController.getClinicalById);

// Update a clinical record by ID
router.put("/:id", clinicalController.updateClinical);

// Delete a clinical record by ID
router.delete("/:id", clinicalController.deleteClinical);

module.exports = router;
