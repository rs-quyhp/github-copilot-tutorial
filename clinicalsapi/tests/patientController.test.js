const request = require("supertest");
const express = require("express");
const patientController = require("../controllers/patientController");

jest.mock("../daos/patientDao");
const patientDao = require("../daos/patientDao");

const app = express();
app.use(express.json());
app.post("/patients", patientController.createPatient);
app.get("/patients", patientController.getAllPatients);
app.get("/patients/:id", patientController.getPatientById);
app.put("/patients/:id", patientController.updatePatient);
app.delete("/patients/:id", patientController.deletePatient);

describe("Patient API", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new patient", async () => {
    const mockPatient = { _id: "1", name: "John" };
    patientDao.createPatient.mockResolvedValue(mockPatient);
    const res = await request(app).post("/patients").send({ name: "John" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(mockPatient);
  });

  it("should get all patients", async () => {
    const mockPatients = [{ _id: "1", name: "John" }];
    patientDao.getAllPatients.mockResolvedValue(mockPatients);
    const res = await request(app).get("/patients");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(mockPatients);
  });

  it("should get a patient by id", async () => {
    const mockPatient = { _id: "1", name: "John" };
    patientDao.getPatientById.mockResolvedValue(mockPatient);
    const res = await request(app).get("/patients/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(mockPatient);
  });

  it("should update a patient by id", async () => {
    const mockPatient = { _id: "1", name: "Jane" };
    patientDao.updatePatient.mockResolvedValue(mockPatient);
    const res = await request(app).put("/patients/1").send({ name: "Jane" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(mockPatient);
  });

  it("should delete a patient by id", async () => {
    const mockPatient = { _id: "1", name: "John" };
    patientDao.deletePatient.mockResolvedValue(mockPatient);
    const res = await request(app).delete("/patients/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Patient deleted" });
  });
});
