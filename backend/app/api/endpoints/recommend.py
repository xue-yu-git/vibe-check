from fastapi import APIRouter

router = APIRouter(prefix="/api")

@router.post("/recommend")
async def get_recommendations(query: dict):
    # This is where the core logic will go.
    # For now, we'll return a dummy response.
    user_vibe = query.get("vibe")
    print(f"Received vibe: {user_vibe}")

    # Dummy data matching the expected frontend structure
    return {
        "results":"dummy"
    }
