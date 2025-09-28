import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  return (
    <div className="patient-table-container">
      <h2>Patient Details</h2>
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
            <tr key={patient.id}>
              <td>{patient.firstName}</td>
              <td>{patient.lastName}</td>
              <td>{patient.age}</td>
              {/* Add more fields as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
