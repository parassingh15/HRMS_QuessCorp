import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import AllEmployees from "../AllEmployees/AllEmployees";
import { Link } from "react-router-dom";

function Dashboard() {
  const [totalEmployees, setTotalEmployees] = useState(0);

  useEffect(() => {
    const fetchEmployeeCount = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/employees/count`);
        const data = await res.json();
        setTotalEmployees(data.total);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEmployeeCount();
  }, []);

  return (
    <div className="Dashboard">
  <Navbar />

  <div className="MainDashboard">
    <div className="welcomeDiv">
      <h1>Welcome back, Admin</h1>

      <Link to="/addEmployee" style={{ textDecoration: "none" }}>
        <button className="newEmployeeBtn">
          <i className="fa-solid fa-plus"></i> New Employee
        </button>
      </Link>
    </div>

    <div className="EmployeesInfo">
          <div class="card">
            <div class="card-header">
              <span class="title">Total Employees</span>
            </div>

            <div class="card-body">
              <h2 class="count">{totalEmployees}</h2>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <span class="title">Total Depatments</span>
            </div>

            <div class="card-body">
              <h2 class="count">15</h2>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <span class="title">Success Rate</span>
            </div>

            <div class="card-body">
              <h2 class="count">93%</h2>
            </div>
          </div>
        </div>

    <p className="allEmployeesTitle">All Employees</p>
    <AllEmployees />
  </div>
</div>

  );
}

export default Dashboard;
