const Clinical = require("../models/clinical");

const clinicalDao = {
  // Create a new clinical record
  async createClinical(data) {
    const clinical = new Clinical(data);
    return await clinical.save();
  },

  // Get all clinical records
  async getAllClinicals() {
    return await Clinical.find();
  },

  // Get a clinical record by ID
  async getClinicalById(id) {
    return await Clinical.findById(id);
  },

  // Update a clinical record by ID
  async updateClinical(id, data) {
    return await Clinical.findByIdAndUpdate(id, data, { new: true });
  },

  // Delete a clinical record by ID
  async deleteClinical(id) {
    return await Clinical.findByIdAndDelete(id);
  },
};

module.exports = clinicalDao;
