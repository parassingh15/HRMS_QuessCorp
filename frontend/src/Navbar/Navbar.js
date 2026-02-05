import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="topbar">
        <p className="logo">HRMS</p>
        <i
          className="fa-solid fa-bars menu-icon"
          onClick={() => setOpen(!open)}
        ></i>
      </div>

      <div className={`Navbar ${open ? "show" : ""}`}>
        <div className="addEmployeeCard">
          <div className="adminName">
            <i class="fa-solid fa-users-gear"></i>
            <div>
              <p>Admin</p>
              <p>Administrator</p>
            </div>
          </div>

          <Link to="/addEmployee" style={{ textDecoration: "none" }}>
            <button className="addEmployeeBtn">+ Add Employee</button>
          </Link>
        </div>

        <div className="menuLinks">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="menuLinkList">
              <i className="fa-solid fa-chart-line"></i>
              <span>Dashboard</span>
            </p>
          </Link>
          <Link to="/employees" style={{ textDecoration: "none" }}>
            <p className="menuLinkList">
              <i class="fa-solid fa-user"></i>
              <span>Employees</span>
            </p>
          </Link>
          <Link to="/attendance" style={{ textDecoration: "none" }}>
            <p className="menuLinkList">
              <i class="fa-solid fa-clipboard-user"></i>
              <span>Attendance</span>
            </p>
          </Link>
          <p className="menuLinkList">
            <i class="fa-solid fa-bars-progress"></i>
            <span>Leave Management</span>
          </p>
          <p className="menuLinkList">
            <i class="fa-solid fa-hand-holding-dollar"></i>
            <span>Payroll</span>
          </p>
          <p className="menuLinkList">
            <i class="fa-solid fa-user-plus"></i>
            <span>Advance HR Features</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
