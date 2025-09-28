import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddClinical from "./components/AddClinical";
import AddPatient from "./components/AddPatient";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add-patient" element={<AddPatient />}></Route>
          <Route
            path="/add-clinical:patientId"
            element={<AddClinical />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
