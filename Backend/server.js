const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB local connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Employee schema
const employeeSchema = new mongoose.Schema({
  employeeId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  department: String
});
const Employee = mongoose.model("Employee", employeeSchema);

// Attendance Schema

const attendanceSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  date: {
    type: String, 
    required: true,
  },
  status: {
    type: String,
    enum: ["Present", "Absent"],
    required: true,
  },
}, { timestamps: true });

const Attendance = mongoose.model("Attendance", attendanceSchema);


// GET all employees
app.get("/api/employees", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees); // returns [] if DB empty
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST add new employee
app.post("/api/employees", async (req, res) => {
  try {
    const { employeeId, name, email, department } = req.body;
    if (!employeeId || !name || !email) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const newEmployee = new Employee({ employeeId, name, email, department });
    const saved = await newEmployee.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE employee by ID
app.delete("/api/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find employee by ID and delete
    const deletedEmployee = await Employee.findByIdAndDelete(id);

    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Employee deleted successfully", deletedEmployee });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get total employees count
app.get("/api/employees/count", async (req, res) => {
  try {
    const count = await Employee.countDocuments();
    res.status(200).json({ total: count });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

//MArk Attendance
app.post("/api/attendance", async (req, res) => {
  try {
    const { employeeId, date, status } = req.body;

    if (!employeeId || !date || !status) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Prevent duplicate attendance for same employee & date
    const alreadyMarked = await Attendance.findOne({ employeeId, date });
    if (alreadyMarked) {
      return res.status(400).json({ message: "Attendance already marked for this date" });
    }

    const attendance = new Attendance({ employeeId, date, status });
    const saved = await attendance.save();

    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get attendance for all Employees
app.get("/api/attendance", async (req, res) => {
  try {
    const records = await Attendance.find()
      .populate("employeeId", "name employeeId department")
      .sort({ date: -1 });

    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("API is running"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
