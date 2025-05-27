from fastapi import FastAPI, UploadFile, File, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse, Response
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from twilio.rest import Client
from twilio.twiml.voice_response import VoiceResponse
import pandas as pd
import os
from dotenv import load_dotenv
import httpx
import time

load_dotenv()

app = FastAPI()

# Mount static files and templates
static_dir = os.path.join(os.path.dirname(__file__), "static")
app.mount("/static", StaticFiles(directory=static_dir), name="static")
templates = Jinja2Templates(directory="static")

# Allow all CORS (frontend/backend together)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Twilio setup
account_sid = os.getenv("TWILIO_ACCOUNT_SID")
auth_token = os.getenv("TWILIO_AUTH_TOKEN")
twilio_number = os.getenv("TWILIO_PHONE_NUMBER")
client = Client(account_sid, auth_token)

# Data storage
logs = []
errors = []
recordings = []

@app.get("/", response_class=HTMLResponse)
async def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/ping")
async def ping():
    """Endpoint specifically for uptime monitoring"""
    return {"status": "alive", "timestamp": time.time()}

@app.post("/upload_csv/")
async def upload_csv(file: UploadFile = File(...)):
    content = await file.read()
    df = pd.read_csv(pd.io.common.BytesIO(content))

    required_columns = ['Contact Number']
    if not all(col in df.columns for col in required_columns):
        errors.append("❌ Error: Missing 'Contact Number' in CSV.")
        return {"message": "Invalid CSV file."}

    for _, row in df.iterrows():
        try:
            number = str(row['Contact Number']).strip()
            if number == twilio_number:
                errors.append(f"❌ Cannot call Twilio number {number}")
                continue
            if not number.startswith('+'):
                if len(number) == 10:
                    number = '+1' + number
                else:
                    number = '+' + number

            call = client.calls.create(
                url="https://voice-5883.twil.io/voice",
                to=number,
                from_=twilio_number,
                record=True
            )

            logs.append(f"✅ Called {number}")

            # Save Recording
            recordings_list = client.recordings.list(call_sid=call.sid, limit=1)
            for rec in recordings_list:
                rec_url = f"https://api.twilio.com{rec.uri.replace('.json', '.mp3')}"
                recordings.append({"number": number, "url": rec_url})

        except Exception as e:
            errors.append(f"❌ Failed to call {row['Contact Number']}: {str(e)}")

    return {"message": "All calls processed!"}

@app.get("/logs/")
def get_logs():
    return {
        "logs": logs,
        "errors": errors,
        "recordings": recordings,
        "calls_made": len(logs),
        "calls_failed": len(errors),
        "total_recordings": len(recordings)
    }

@app.post("/voice")
async def voice():
    resp = VoiceResponse()
    # Example Cartesia TTS integration
    cartesia_url = "https://api.cartesia.ai/tts"
    headers = {"Authorization": f"Bearer {os.getenv('CARTESIA_API_KEY')}"}
    data = {"text": "Hello, this is an AI call!", "voice": "male"}
    async with httpx.AsyncClient() as client:
        response = await client.post(cartesia_url, json=data, headers=headers)
        if response.status_code == 200:
            audio_url = response.json()['audio_url']
            resp.play(audio_url + f"?t={int(time.time())}")  # Prevent looping
        else:
            resp.say("Error generating audio.", voice='Polly.Joanna')
    return Response(content=str(resp), media_type="text/xml")