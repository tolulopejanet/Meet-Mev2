import os
from dotenv import load_dotenv

from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, EmailStr
from typing import Optional
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from settings import Settings

app = FastAPI()


load_dotenv()  # Load environment variables from .env

# cnfigure CORS to allow request from website

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://tobivictor.tech"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name :str
    email: EmailStr
    message: str
    

settings = Settings()

# Email Configuration

# EMAIL_HOST = os.getenv("EMAIL_HOST")
# EMAIL_PORT = int(os.getenv("EMAIL_PORT"))
# EMAIL_USER = os.getenv("EMAIL_USER")
# EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
# RECIPIENT_EMAIL = os.getenv("RECIPIENT_EMAIL")


@app.get("/")
def index():
    return JSONResponse({"message" : "welcome Home"})

@app.post("/send-message")
async def send_message(form_data: ContactForm):
    try:
        # create the E-mail message
        msg = MIMEMultipart()
        msg["From"] = settings.email_user
        msg["To"] = settings.recipient_email
        msg["Subject"] = f"Portfolio Contact: Message from {form_data.name}"
        # Emial body
        body = f"""
        Name: {form_data.name}
        Email: {form_data.email}

        Message:
        {form_data.message}
        """
        msg.attach(MIMEText(body, "plain"))
        
        
        # Send the email
        
        with smtplib.SMTP(settings.email_host, settings.email_port) as server:
            server.starttls()
            server.login(settings.email_user, settings.email_password)
            server.send_message(msg)
        return {"status": "success", "message": "Email sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")
