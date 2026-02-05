from pydantic import BaseModel
from enum import Enum

class AttendanceStatus(str, Enum):
    Present = "Present"
    Absent = "Absent"

class AttendanceCreate(BaseModel):
    employeeId: str
    name: str
    date: str
    status: AttendanceStatus
