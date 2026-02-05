import React, { useEffect, useState } from "react";
import "./AllEmployees.css";

function AllEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/employees`)
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error("Error fetching employees:", err));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?"))
      return;

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/employees/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete employee");

      // Remove employee from state to update UI
      setEmployees((prev) => prev.filter((emp) => emp._id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting employee");
    }
  };

  return (
    <div className="AllEmployees">
      <table className="employeeTable">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Delete Emp</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(employees) && employees.length > 0 ? (
            employees.map((emp) => (
              <tr key={emp._id}>
                <td>{emp.employeeId}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>
                  <i
                    style={{ color: "red", cursor: "pointer" }}
                    className="fa-regular fa-trash-can"
                    onClick={() => handleDelete(emp._id)}
                  ></i>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No employees found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AllEmployees;
