from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.employee import router as employee_router
from routes.attendance import router as attendance_router
from core.database import client

server = FastAPI(title="Employee Attendance API")

@server.on_event("startup")
async def startup_event():
    print("✅ MongoDB connected")

@server.on_event("shutdown")
async def shutdown_event():
    client.close()

server.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

server.include_router(employee_router)
server.include_router(attendance_router)

@server.get("/")
def root():
    return {"message": "API is running"}
