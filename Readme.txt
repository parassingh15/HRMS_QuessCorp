Employee Attendance Management System

A full-stack Employee Attendance Management System built using React (frontend) and Python FastAPI (backend) with MongoDB.
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

View attendance records for all employees (Admin view)

TECH STACK
Frontend:

React

React Router

Fetch API

CSS (Custom dashboard styling)

Backend:

Python

FastAPI

MongoDB

Pydantic (for data validation)

PyMongo (MongoDB driver)

CORS


API ENDPOINTS
Employees
Method	Endpoint	Description
GET	/api/employees	Get all employees
POST	/api/employees	Add new employee
DELETE	/api/employees/{id}	Delete employee
GET	/api/employees/count	Get total employee count
Attendance
Method	Endpoint	Description
POST	/api/attendance	Mark attendance
GET	/api/attendance/{employeeId}	Get attendance by employee
GET	/api/attendance	Get attendance for all employees

SAMPLE API REQUEST

Mark Attendance

POST /api/attendance

SETUP & INSTALLATION
Clone Repository

Backend Setup (FastAPI)

Install dependencies:

cd server
pip install -r requirements.txt


Create a .env file in backend/ (for local dev):

MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/mydatabase?retryWrites=true&w=majority
PORT=5000  # Optional for local development


Run locally:

uvicorn main:app --reload --host 0.0.0.0 --port 5000


Backend URL locally: http://localhost:5000

Frontend Setup (React)

Install dependencies:

cd frontend
npm install


Create a .env file in the frontend root:

REACT_APP_BACKEND_URL=http://localhost:5000


Run locally:

npm start


Frontend URL locally: http://localhost:3000

RENDER DEPLOYMENT
1. Backend (FastAPI)

Create a Python Web Service in Render.

Set environment variables in Render dashboard:

MONGO_URI → your MongoDB connection string

Do NOT set PORT — Render provides it automatically

Set the start command in Render:

uvicorn main:app --host 0.0.0.0 --port $PORT

2. Frontend (React)

Create a Static Site in Render.

Set environment variables in Render:

REACT_APP_BACKEND_URL → your deployed backend URL, e.g. https://your-backend.onrender.com

Build command:

npm install
npm run build


Publish directory:

build


After deployment, React frontend will call the Render backend using REACT_APP_BACKEND_URL.

APPLICATION SCREENS

Admin Dashboard

Employee List

Attendance Marking Form

Attendance History Table

KEY LEARNINGS

REST API design using FastAPI

MongoDB relations with ObjectId

React state management

Backend error handling

Component-based frontend architecture

FUTURE ENHANCEMENTS

Monthly attendance reports

Attendance percentage calculation

Calendar-based attendance view

Role-based authentication (Admin/User)

Export attendance to Excel

AUTHOR

Paras Singh

If you like this project, feel free to star the repository on GitHub ⭐