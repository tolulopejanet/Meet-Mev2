# Use a Python 3.12 slim base image
FROM python:3.12-slim

# Set the working directory in the container
WORKDIR /app

# Copy pyproject.toml and poetry.lock
COPY pyproject.toml poetry.lock ./

# Install Poetry
RUN pip install poetry

# Install project dependencies
RUN poetry install --no-root --no-interaction --no-ansi

# Copy the application code
COPY . .

# Expose the port that the application listens on
EXPOSE 8000

# Set the entrypoint to run the FastAPI application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]