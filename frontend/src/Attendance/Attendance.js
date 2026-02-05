import './Attendance.css';
import Navbar from "../Navbar/Navbar";
import AttendanceList from "../AttendanceList/AttendanceList";

function Attendance() {
  return (
    <div className="Attendance">
      <Navbar />
      <div className="MainDashboard">
        <div className="welcomeDiv">
          <h1>Attendance Progress</h1>
        </div>

        <p className="allEmployeesTitle">Attendese</p>
        <AttendanceList/>
      </div>
    </div>
  );
}

export default Attendance;
