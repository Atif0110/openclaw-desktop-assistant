# Personaliz OpenClaw Desktop Assistant

## Overview

This project is a desktop-style assistant that makes OpenClaw automation usable for non-technical users through a conversational interface.

Users can create and schedule automation agents using simple chat instead of command-line tools.

The system uses a local LLM by default and switches to external models when an API key is provided.

---

## Key Features

### Local LLM (Offline First)
- Uses Phi-3 via Ollama
- Works without API key
- Handles conversational interaction

### LLM Model Switching
- If API key exists → uses external model (OpenAI)
- If no API key → uses local Phi-3
- Automatic routing logic

### Agent Automation
- Create agents
- Schedule jobs with cron
- Sandbox mode for safe testing
- Logging of executions

### Browser Automation
- LinkedIn posting via Playwright
- Hashtag-based commenting automation
- Demonstrates real-world automation

### Data Storage
- SQLite database
- Stores agents, logs, and settings

---

## Architecture

UI (Chat Interface)  
→ Node.js Backend  
→ LLM Router (Local or API)  
→ Automation Layer (Playwright)  
→ SQLite Storage

---

## How LLM Switching Works

The system checks if a user API key is stored.

If API key exists:
- Requests go to external LLM API

If no API key:
- Requests go to local Phi-3 via Ollama

This ensures the app works immediately after install without requiring credentials.

---

## Setup Instructions

### 1. Install Ollama
https://ollama.com

### 2. Pull Phi-3 Model

ollama pull phi3:mini


### 3. Install Dependencies



npm install


### 4. Start Server



node server.js


### 5. Open UI

Open:



ui/index.html


in a browser.

---

## Demo Capabilities

- Conversational chat assistant
- Scheduled agent execution
- LinkedIn posting automation
- Hashtag comment automation
- Execution logs

---

## Sandbox Mode

Agents can run in sandbox mode to simulate actions without posting publicly.

This prevents accidental automation.

---

## Future Improvements

- Full OpenClaw CLI integration
- Packaged Tauri desktop build
- Advanced approval UI
- More automation templates

---

## Author

Atif

Personaliz.ai Coding Task Submission
