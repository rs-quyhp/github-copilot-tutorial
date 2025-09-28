import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./AddClinical.css";
function AddClinical() {
  const { patientId } = useParams();
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ componentName: "", componentValue: "" });
  const [formError, setFormError] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/patients/${patientId}`)
      .then((response) => {
        setPatient(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch patient details.");
        setLoading(false);
      });
  }, [patientId]);

  if (loading) return <div>Loading patient details...</div>;
  if (error) return <div>{error}</div>;
  if (!patient) return <div>No patient found.</div>;
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setFormLoading(true);
    setSuccess(false);
    try {
      await axios.post("http://localhost:8000/api/clinicals", {
        ...form,
        patient: patientId,
      });
      setSuccess(true);
      setForm({ componentName: "", componentValue: "" });
    } catch (err) {
      setFormError("Failed to add clinical record.");
    } finally {
      setFormLoading(false);
    }
  };
  return (
    <div className="add-clinical-container">
      <button
        className="back-button"
        onClick={() => (window.location.href = "/")}
        style={{
          display: "flex",
          alignItems: "center",
          background: "none",
          border: "none",
          color: "#2980b9",
          cursor: "pointer",
          marginBottom: "1rem",
          fontSize: "1rem",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
          style={{ marginRight: "0.5rem" }}
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 1-.5.5H3.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L3.707 7.5H14.5A.5.5 0 0 1 15 8z"
          />
        </svg>
        Back to Home
      </button>
      <h2>Add Clinical for Patient</h2>
      <div className="patient-info">
        <div>
          <strong>First Name:</strong> {patient.firstName}
        </div>
        <div>
          <strong>Last Name:</strong> {patient.lastName}
        </div>
        <div>
          <strong>Age:</strong> {patient.age}
        </div>
      </div>
      <form className="add-clinical-form" onSubmit={handleSubmit}>
        <label>
          Component Name
          <input
            type="text"
            name="componentName"
            value={form.componentName}
            onChange={handleChange}
            required
            placeholder="e.g. Blood Pressure"
          />
        </label>
        <label>
          Component Value
          <input
            type="text"
            name="componentValue"
            value={form.componentValue}
            onChange={handleChange}
            required
            placeholder="e.g. 120/80"
          />
        </label>
        {formError && <div className="form-error">{formError}</div>}
        {success && (
          <div style={{ color: "#27ae60", textAlign: "center" }}>
            Clinical record added!
          </div>
        )}
        <button type="submit" disabled={formLoading}>
          {formLoading ? "Adding..." : "Add Clinical"}
        </button>
      </form>
    </div>
  );
}

export default AddClinical;
