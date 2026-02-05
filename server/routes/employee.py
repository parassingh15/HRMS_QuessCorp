from fastapi import APIRouter, HTTPException
from core.database import db
from schemas.employee import EmployeeCreate
from bson import ObjectId

router = APIRouter(prefix="/api/employees", tags=["Employees"])

@router.get("/")
async def get_employees():
    employees = []
    async for emp in db.employees.find():
        emp["_id"] = str(emp["_id"])
        employees.append(emp)
    return employees

@router.post("/", status_code=201)
async def create_employee(employee: EmployeeCreate):
    result = await db.employees.insert_one(employee.dict())
    employee_data = employee.dict()
    employee_data["_id"] = str(result.inserted_id)
    return employee_data

@router.delete("/{id}")
async def delete_employee(id: str):
    result = await db.employees.find_one_and_delete({"_id": ObjectId(id)})
    if not result:
        raise HTTPException(status_code=404, detail="Employee not found")
    result["_id"] = str(result["_id"])
    return {"message": "Employee deleted successfully", "deletedEmployee": result}

@router.get("/count")
async def employee_count():
    count = await db.employees.count_documents({})
    return {"total": count}
