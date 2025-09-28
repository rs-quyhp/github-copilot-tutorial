import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPatient.css";

function AddPatient() {
  const [form, setForm] = useState({ firstName: "", lastName: "", age: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await axios.post("http://localhost:8000/api/patients", form);
      navigate("/");
    } catch (err) {
      setError("Failed to add patient.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-patient-container">
      <h2>Add Patient</h2>
      <form className="add-patient-form" onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Age
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            min="0"
            required
          />
        </label>
        {error && <div className="form-error">{error}</div>}
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Patient"}
        </button>
      </form>
    </div>
  );
}

export default AddPatient;
