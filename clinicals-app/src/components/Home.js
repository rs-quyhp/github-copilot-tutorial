import axios from "axios";
import { useEffect, useState } from "react";
import { FaNotesMedical, FaTrash, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Home.css";
function Home() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/patients") // Replace with your API endpoint
      .then((response) => {
        setPatients(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch patient details.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading patient details...</div>;
  if (error) return <div>{error}</div>;

  const handleDeletePatient = async (patientId) => {
    if (!window.confirm("Are you sure you want to delete this patient?"))
      return;
    try {
      await axios.delete(`http://localhost:8000/api/patients/${patientId}`);
      setPatients((prev) => prev.filter((p) => p._id !== patientId));
      toast.success("Patient deleted successfully!");
    } catch (err) {
      setError("Failed to delete patient.");
    }
  };

  return (
    <div className="patient-table-container">
      <h2>Patient Details</h2>
      <div className="table-header">
        <h2>Patient Details</h2>
        <button
          className="add-patient-btn"
          title="Add Patient"
          onClick={() => navigate("/add-patient")}
        >
          <FaUserPlus size={20} />
        </button>
      </div>
      <table className="patient-table">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last Name</th>
            <th>Age</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient._id}>
              <td>{patient.firstName}</td>
              <td>{patient.lastName}</td>
              <td>{patient.age}</td>
              <td>
                <div className="action-buttons">
                  <button
                    className="add-clinical-btn"
                    onClick={() => navigate(`/add-clinical/${patient._id}`)}
                    title="Add Clinical"
                  >
                    <FaNotesMedical style={{ marginRight: 6 }} />
                    Add Clinical
                  </button>
                  <button
                    className="delete-patient-btn"
                    onClick={() => handleDeletePatient(patient._id)}
                    title="Delete Patient"
                    style={{ marginLeft: 8 }}
                  >
                    <FaTrash color="#e74c3c" size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
