from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from.api.endpoints import recommend

app = FastAPI()

# Configure CORS to allow the frontend to communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to your frontend's domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(recommend.router)

@app.get("/")
def read_root():
    return {"message": "Vibe Check API is running"}
