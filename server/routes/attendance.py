from fastapi import APIRouter, HTTPException
from core.database import db
from schemas.attendance import AttendanceCreate
from bson import ObjectId

router = APIRouter(
    prefix="/api/attendance",
    tags=["Attendance"]
)

@router.post("/", status_code=201)
async def mark_attendance(data: AttendanceCreate):

    exists = await db.attendance.find_one({
        "employeeId": ObjectId(data.employeeId),
        "date": data.date
    })

    if exists:
        raise HTTPException(
            status_code=400,
            detail="Attendance already marked for this date"
        )

    attendance = {
        "employeeId": ObjectId(data.employeeId),
        "employeeName": data.name,
        "date": data.date,
        "status": data.status
    }

    result = await db.attendance.insert_one(attendance)
    attendance["_id"] = str(result.inserted_id)
    attendance["employeeId"] = data.employeeId
    return attendance


@router.get("/")
async def get_attendance():
    pipeline = [
        {
            "$lookup": {
                "from": "employees",
                "localField": "employeeId",
                "foreignField": "_id",
                "as": "employee"
            }
        },
        {"$unwind": "$employee"},
        {"$sort": {"date": -1}}
    ]

    records = []
    async for rec in db.attendance.aggregate(pipeline):
        rec["_id"] = str(rec["_id"])
        rec["employeeId"] = str(rec["employeeId"])
        rec["employee"]["_id"] = str(rec["employee"]["_id"])
        records.append(rec)

    return records
