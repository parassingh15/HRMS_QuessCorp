from pydantic import BaseModel, EmailStr
from typing import Optional

class EmployeeCreate(BaseModel):
    employeeId: str
    name: str
    email: EmailStr
    department: Optional[str] = None
