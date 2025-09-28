const request = require("supertest");
const express = require("express");

jest.mock("../daos/patientDao");
const patientDao = require("../daos/patientDao");

const app = express();
app.use(express.json());

describe("Patient API", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new patient", async () => {
    const mockPatient = { _id: "1", name: "John" };
    patientDao.createPatient.mockResolvedValue(mockPatient);
    const res = await request(app).post("/api/patients").send({ name: "John" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(mockPatient);
  });

  it("should get all patients", async () => {
    const mockPatients = [{ _id: "1", name: "John" }];
    patientDao.getAllPatients.mockResolvedValue(mockPatients);
    const res = await request(app).get("/api/patients");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(mockPatients);
  });

  it("should get a patient by id", async () => {
    const mockPatient = { _id: "1", name: "John" };
    patientDao.getPatientById.mockResolvedValue(mockPatient);
    const res = await request(app).get("/api/patients/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(mockPatient);
  });

  it("should update a patient by id", async () => {
    const mockPatient = { _id: "1", name: "Jane" };
    patientDao.updatePatient.mockResolvedValue(mockPatient);
    const res = await request(app)
      .put("/api/patients/1")
      .send({ name: "Jane" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(mockPatient);
  });

  it("should delete a patient by id", async () => {
    const mockPatient = { _id: "1", name: "John" };
    patientDao.deletePatient.mockResolvedValue(mockPatient);
    const res = await request(app).delete("/api/patients/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Patient deleted" });
  });
});
