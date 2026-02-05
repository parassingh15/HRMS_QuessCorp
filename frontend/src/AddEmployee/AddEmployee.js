import React, { useState } from "react";
import axios from "axios";
import "./AddEmployee.css";
import Navbar from "../Navbar/Navbar";

function AddEmployee() {
  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    email: "",
    department: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // optional

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // Trim values before sending
      const payload = {
        employeeId: formData.employeeId.trim(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        department: formData.department.trim()
      };

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/employees`,
        payload
      );

      alert("Employee Added Successfully");

      setFormData({
        employeeId: "",
        name: "",
        email: "",
        department: ""
      });
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message ||
          "Error adding employee. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="AddEmployee">
      <Navbar />

      <div className="MainDashboard">
        <div className="welcomeDiv">
          <h1>Add New Employee</h1>
        </div>

        <div className="addEmployeeForm">
          <p>ADD EMPLOYEE DETAILS</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="employeeId" className="form-label">
                EMPLOYEE ID
              </label>
              <input
                type="text"
                className="form-control"
                id="employeeId"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                EMPLOYEE NAME
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                EMPLOYEE EMAIL ID
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="department" className="form-label">
                EMPLOYEE DEPARTMENT
              </label>
              <input
                type="text"
                className="form-control"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting} // prevent multiple clicks
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
