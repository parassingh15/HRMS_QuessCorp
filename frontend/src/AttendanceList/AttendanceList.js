import React, { useEffect, useState } from "react";
import './AttendanceList.css';

function AttendanceList() {
  const [employees, setEmployees] = useState([]);
  const [employeeId, setEmployeeId] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Present");
  const [attendance, setAttendance] = useState([]);

  // Get all employees
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/employees`)
      .then((res) => res.json())
      .then((data) => setEmployees(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Error fetching employees:", err));
  }, []);

  // Get attendance for selected employee
  useEffect(() => {
    if (!employeeId) {
      setAttendance([]);
      return;
    }

    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/attendance/${employeeId}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setAttendance(data);
        } else if (data && Array.isArray(data.records)) {
          setAttendance(data.records);
        } else {
          setAttendance([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching attendance:", err);
        setAttendance([]);
      });
  }, [employeeId]);

  // Submit attendance
  const submitAttendance = async () => {
    if (!employeeId || !date) {
      alert("Please select employee and date");
      return;
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/attendance`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ employeeId, date, status }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Error marking attendance");
        return;
      }

      setAttendance((prev) => [data, ...prev]);
      alert("Attendance marked");
    } catch (err) {
      console.error("Error submitting attendance:", err);
      alert("Error submitting attendance");
    }
  };

  return (
    <div className="attendanceBox">
      {/* Controls */}
      <div className="attendanceControls">
        <select onChange={(e) => setEmployeeId(e.target.value)} value={employeeId}>
          <option value="">Select Employee</option>
          {employees.map((emp) => (
            <option key={emp._id} value={emp._id}>
              {emp.name} ({emp.employeeId})
            </option>
          ))}
        </select>

        <input type="date" onChange={(e) => setDate(e.target.value)} value={date} />

        <select onChange={(e) => setStatus(e.target.value)} value={status}>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>

        <button onClick={submitAttendance}>Mark Attendance</button>
      </div>

      {/* Attendance Table */}
      <table className="attendanceTable">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(attendance) && attendance.length > 0 ? (
            attendance.map((att) => (
              <tr key={att._id}>
                <td>{att.name || employees.find(emp => emp._id === att.employeeId)?.name || "N/A"}</td>
                <td>{att.date ? new Date(att.date).toLocaleDateString() : "N/A"}</td>
                <td
                  style={{
                    color: att.status === "Present" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {att.status || "N/A"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceList;
