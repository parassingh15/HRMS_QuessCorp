<<<<<<< HEAD
Employee Attendance Management System

A full-stack Employee Attendance Management System built using React, Node.js, Express, and MongoDB.
Admins can manage employees and mark daily attendance as Present or Absent.

FEATURES

Employee Management

Add new employees

View all employees

Delete employees

View total employee count

Attendance Management

Mark attendance (Present / Absent)

Prevent duplicate attendance for the same date

View attendance records per employee

View attendance records for all employees (Admin view)

TECH STACK

Frontend

React

React Router

Fetch API

CSS (Custom dashboard styling)

Backend

Node.js

Express.js

MongoDB

Mongoose

CORS

PROJECT STRUCTURE

employee-attendance
│
├── backend
│ ├── models
│ │ └── Attendance.js
│ ├── index.js
│ └── package.json
│
├── frontend
│ ├── src
│ │ ├── Attendance
│ │ │ ├── Attendance.jsx
│ │ │ ├── AttendanceList.jsx
│ │ │ └── Attendance.css
│ │ ├── Navbar
│ │ ├── App.jsx
│ │ └── index.js
│ └── package.json
│
└── README.md

API ENDPOINTS

Employees
GET /api/employees → Get all employees
POST /api/employees → Add new employee
DELETE /api/employees/:id → Delete employee
GET /api/employees/count → Get total employee count

Attendance
POST /api/attendance → Mark attendance
GET /api/attendance/:employeeId → Get attendance by employee
GET /api/attendance → Get attendance for all employees

SAMPLE API REQUEST

Mark Attendance

POST /api/attendance

{
"employeeId": "65b123abc456",
"date": "2026-01-28",
"status": "Present"
}

SETUP & INSTALLATION

Clone Repository

git clone https://github.com/your-username/employee-attendance.git

cd employee-attendance

Backend Setup

cd backend
npm install
npm start

MongoDB should be running locally at:
mongodb://127.0.0.1:27017/employeeDB

Frontend Setup

cd frontend
npm install
npm start

APPLICATION SCREENS

Admin Dashboard

Employee List

Attendance Marking Form

Attendance History Table

KEY LEARNINGS

REST API design

MongoDB relations using ObjectId

React state management

Backend error handling

Component-based architecture

FUTURE ENHANCEMENTS

Monthly attendance reports

Attendance percentage calculation

Calendar-based attendance view

Role-based authentication (Admin/User)

Export attendance to Excel

AUTHOR

Paras Singh

=======
Employee Attendance Management System

A full-stack Employee Attendance Management System built using React, Node.js, Express, and MongoDB.
Admins can manage employees and mark daily attendance as Present or Absent.

FEATURES

Employee Management

Add new employees

View all employees

Delete employees

View total employee count

Attendance Management

Mark attendance (Present / Absent)

Prevent duplicate attendance for the same date

View attendance records per employee

View attendance records for all employees (Admin view)

TECH STACK

Frontend

React

React Router

Fetch API

CSS (Custom dashboard styling)

Backend

Node.js

Express.js

MongoDB

Mongoose

CORS

PROJECT STRUCTURE

employee-attendance
│
├── backend
│ ├── models
│ │ └── Attendance.js
│ ├── index.js
│ └── package.json
│
├── frontend
│ ├── src
│ │ ├── Attendance
│ │ │ ├── Attendance.jsx
│ │ │ ├── AttendanceList.jsx
│ │ │ └── Attendance.css
│ │ ├── Navbar
│ │ ├── App.jsx
│ │ └── index.js
│ └── package.json
│
└── README.md

API ENDPOINTS

Employees
GET /api/employees → Get all employees
POST /api/employees → Add new employee
DELETE /api/employees/:id → Delete employee
GET /api/employees/count → Get total employee count

Attendance
POST /api/attendance → Mark attendance
GET /api/attendance/:employeeId → Get attendance by employee
GET /api/attendance → Get attendance for all employees

SAMPLE API REQUEST

Mark Attendance

POST /api/attendance

{
"employeeId": "65b123abc456",
"date": "2026-01-28",
"status": "Present"
}

SETUP & INSTALLATION

Clone Repository

git clone https://github.com/your-username/employee-attendance.git

cd employee-attendance

Backend Setup

cd backend
npm install
npm start

MongoDB should be running locally at:
mongodb://127.0.0.1:27017/employeeDB

Frontend Setup

cd frontend
npm install
npm start

APPLICATION SCREENS

Admin Dashboard

Employee List

Attendance Marking Form

Attendance History Table

KEY LEARNINGS

REST API design

MongoDB relations using ObjectId

React state management

Backend error handling

Component-based architecture

FUTURE ENHANCEMENTS

Monthly attendance reports

Attendance percentage calculation

Calendar-based attendance view

Role-based authentication (Admin/User)

Export attendance to Excel

AUTHOR

Paras Singh

>>>>>>> deee984cdaf50817dfd0bea5e40eafade3e9a9c5
If you like this project, feel free to star the repository on GitHub ⭐