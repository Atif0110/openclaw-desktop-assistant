# 🐾 OpenClaw — AI Agent Automation System

OpenClaw is a lightweight **LLM-powered automation platform** that converts natural language instructions into executable automation agents capable of running browser workflows and scheduled tasks.

Users describe a task in plain English, and OpenClaw automatically creates a structured automation agent that can safely execute browser actions with **human approval and sandbox testing**.

> OpenClaw bridges **Large Language Models and real-world automation**.

---

# 🚀 Overview

OpenClaw acts as an **AI-powered desktop automation assistant**.

Instead of writing scripts manually, users simply describe a task and the system will:

1. Interpret the request using an LLM
2. Generate an automation agent
3. Ask for user approval
4. Schedule the task
5. Execute browser automation
6. Log execution activity

This enables **safe and controlled automation with human-in-the-loop verification**.

---

# ❓ Why OpenClaw?

Traditional automation tools often require:

• writing scripts
• configuring schedulers
• maintaining automation logic

OpenClaw simplifies this workflow.

Users can simply:

✔ Describe tasks in natural language
✔ Preview automation agents before execution
✔ Test automation safely in sandbox mode
✔ Schedule recurring workflows automatically

The platform combines **LLMs + automation + scheduling + safety controls** into a single lightweight system.

---

# ✨ Key Features

### 🤖 Intelligent LLM Routing

OpenClaw automatically selects the appropriate model depending on configuration.

| Model                  | Use Case                |
| ---------------------- | ----------------------- |
| **Ollama phi3:mini**   | Local offline inference |
| **OpenAI gpt-4o-mini** | Cloud-powered reasoning |

This enables:

• Offline capability
• Cost efficiency
• Flexible deployment

---

### 🌐 Browser Automation

OpenClaw uses **Playwright** to automate real browser workflows such as:

• LinkedIn posting
• Comment automation
• Web navigation
• Content publishing

All actions execute inside a **Chromium browser instance**.

---

### ✅ Human-in-the-Loop Approval

Every automation agent must be approved before execution.

Example preview:

```
Agent Preview

Goal: Post trending OpenClaw topics
Schedule: Every 5 minutes
Sandbox Mode: ON

Type 'approve' or 'cancel'
```

This prevents accidental automation.

---

### 🧪 Sandbox Testing Mode

OpenClaw allows agents to be tested safely before running real automation.

| Mode    | Behavior                |
| ------- | ----------------------- |
| Sandbox | Simulated execution     |
| Live    | Full browser automation |

---

### ⏰ Automated Scheduler

A background scheduler continuously checks for active agents and executes them automatically.

Powered by:

• **node-cron**

---

### 🗄 Persistent Storage

OpenClaw uses **SQLite** to store:

• API keys
• agent configurations
• execution logs

---

# 🧠 System Architecture

```
User Input (Natural Language)
            │
            ▼
        LLM Router
   (Ollama / OpenAI)
            │
            ▼
       Agent Generator
            │
            ▼
   Human Approval System
            │
            ▼
        Task Scheduler
            │
            ▼
     Playwright Automation
            │
            ▼
         Execution Logs
            │
            ▼
          SQLite DB
```

---

# 🧰 Tech Stack

### Backend

• Node.js
• Express
• CORS

### AI / LLM

• Ollama (local models)
• OpenAI API

### Browser Automation

• Playwright (Chromium automation)

### Scheduler

• node-cron

### Database

• SQLite (better-sqlite3)

### Frontend

• Lightweight HTML interface

---

# 📂 Project Structure

```
openclaw-desktop-assistant/

server.js
llmRouter.js
agentManager.js
scheduler.js
playwrightBot.js
db.js

ui/
 └── index.html

data/
 └── app.db

package.json
```

### File Responsibilities

| File             | Responsibility                 |
| ---------------- | ------------------------------ |
| server.js        | Express server & API routes    |
| llmRouter.js     | LLM routing logic              |
| agentManager.js  | Agent creation & management    |
| scheduler.js     | Task execution scheduler       |
| playwrightBot.js | Browser automation logic       |
| db.js            | SQLite database initialization |

---

# ⚙️ Installation

## Prerequisites

• Node.js v18+
• Ollama installed locally

Download Ollama:

https://ollama.com/download

Pull the local model:

```
ollama pull phi3:mini
```

---

# 📦 Setup

Clone the repository:

```
git clone https://github.com/Atif0110/openclaw-desktop-assistant.git
cd openclaw-desktop-assistant
```

Install dependencies:

```
npm install
```

Install Playwright browsers:

```
npx playwright install chromium
```

---

# ▶️ Running the Application

Start the server:

```
node server.js
```

Server runs at:

```
http://localhost:3001
```

Open the UI:

```
ui/index.html
```

---

# 📡 API Endpoints

| Method | Endpoint     | Description               |
| ------ | ------------ | ------------------------- |
| POST   | /chat        | Send message to assistant |
| POST   | /setKey      | Store OpenAI API key      |
| POST   | /createAgent | Create agent via JSON     |
| GET    | /logs        | Retrieve execution logs   |

---

# 📌 Example API Usage

### Chat Request

```
curl -X POST http://localhost:3001/chat \
-H "Content-Type: application/json" \
-d '{"message": "create a trending agent"}'
```

### Set API Key

```
curl -X POST http://localhost:3001/setKey \
-H "Content-Type: application/json" \
-d '{"key": "sk-your-openai-key"}'
```

---

# 🤖 Example Agent Workflow

User:

```
create a trending agent
```

Assistant:

```
Trending LinkedIn Agent Preview

Goal: Post trending OpenClaw topics
Schedule: Every 5 minutes
Sandbox: ON
```

User:

```
approve
```

Assistant:

```
Agent deployed successfully
```

---

# 🗃 Database Schema

```
CREATE TABLE settings (
 key TEXT PRIMARY KEY,
 value TEXT
);

CREATE TABLE agents (
 id INTEGER PRIMARY KEY,
 name TEXT,
 config TEXT,
 schedule TEXT,
 sandbox INTEGER
);

CREATE TABLE logs (
 id INTEGER PRIMARY KEY,
 agent_id INTEGER,
 message TEXT,
 created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

# 🛣 Roadmap

Planned improvements:

• Support additional automation agent types
• Per-agent cron scheduling
• Authentication system
• Web dashboard for managing agents
• Real-time execution log streaming

Future LLM integrations:

• Anthropic Claude
• Google Gemini
• Additional local models

---

# 🤝 Contributing

Contributions are welcome.

Steps:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

---

# 📄 License

ISC License

See the LICENSE file for details.

---

# 👨‍💻 Author

**Atif**

GitHub
https://github.com/Atif0110

Built using **Node.js, Playwright, and AI automation**.
