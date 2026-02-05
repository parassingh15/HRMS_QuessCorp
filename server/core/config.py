from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
PORT = int(os.getenv("PORT", 5000))
