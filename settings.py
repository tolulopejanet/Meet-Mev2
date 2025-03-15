from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    email_host: str = "smtp.gmail.com"
    email_port: int = 587
    email_user: str
    email_password: str
    recipient_email: str
    
    class Config:
        env_file = ".env"