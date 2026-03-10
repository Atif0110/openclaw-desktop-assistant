# 🐾 OpenClaw — AI-Powered Desktop Automation Agent

> Describe a task in plain English. OpenClaw turns it into a scheduled, browser-executable automation agent — with your approval before anything runs.

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-Chromium-2EAD33?logo=playwright&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-blue)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

OpenClaw is a lightweight **LLM-powered automation platform** that converts natural language into executable browser agents with built-in human approval, sandbox testing, and cron scheduling — all running locally on your machine.

---

## 🧠 How It Works
```
User Input (Natural Language)
          │
          ▼
      LLM Router
 (Ollama phi3:mini / OpenAI gpt-4o-mini)
          │
          ▼
   Agent Generator
          │
          ▼
 Human Approval Preview  ◄── you approve or cancel
          │
          ▼
    node-cron Scheduler
          │
          ▼
  Playwright Browser Automation
          │
          ▼
   Execution Logs → SQLite
```

---

## ✨ Features

| Feature | Description |
|---|---|
| 🤖 **LLM Routing** | Auto-selects Ollama (offline) or OpenAI based on whether an API key is set |
| ✅ **Human-in-the-Loop** | Every agent shows a preview and requires `approve` before deploying |
| 🧪 **Sandbox Mode** | Simulated dry-run execution before going live |
| ⏰ **Cron Scheduler** | Background scheduler via `node-cron` runs agents on defined intervals |
| 🌐 **Browser Automation** | Playwright drives a real Chromium instance for web workflows |
| 🗄 **Persistent Storage** | SQLite stores API keys, agent configs, and execution logs |
| 💬 **Chat Interface** | Lightweight HTML UI for conversational agent creation |

---

## 🏗 Project Structure
```
openclaw-desktop-assistant/
│
├── server.js           # Express server, API routes, approval flow
├── llmRouter.js        # Auto-routes between Ollama and OpenAI
├── agentManager.js     # Creates and retrieves agents from SQLite
├── scheduler.js        # node-cron task runner
├── playwrightBot.js    # Chromium browser automation logic
├── db.js               # SQLite schema initialization
│
├── ui/
│   └── index.html      # Chat interface
│
├── data/
│   └── app.db          # Auto-generated SQLite database
│
└── package.json
```

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js v18+
- [Ollama](https://ollama.com/download) installed locally (for offline mode)
```bash
# Pull the local model
ollama pull phi3:mini
```

### 1. Clone the repository
```bash
git clone https://github.com/Atif0110/openclaw-desktop-assistant.git
cd openclaw-desktop-assistant
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install Playwright browser
```bash
npx playwright install chromium
```

### 4. (Optional) Set an OpenAI API key

If no key is set, OpenClaw automatically falls back to the local Ollama model.
```bash
curl -X POST http://localhost:3001/setKey \
-H "Content-Type: application/json" \
-d '{"key": "sk-your-openai-key"}'
```

### 5. Start the server
```bash
node server.js
# or
npm start
```

Server runs at `http://localhost:3001`. Open `ui/index.html` in your browser.

---

## 📡 API Reference

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/chat` | Send a natural language message to the assistant |
| `POST` | `/setKey` | Store your OpenAI API key in SQLite |
| `POST` | `/createAgent` | Directly create an agent via JSON payload |
| `GET` | `/logs` | Retrieve all execution logs |

---

## 💬 Example Workflow

**1. User sends a message:**
```
create a trending agent
```

**2. OpenClaw previews the agent:**
```
Trending LinkedIn Agent Preview

Goal: Post trending OpenClaw topics
Schedule: Every 5 minutes
Sandbox: ON

Type 'approve' or 'cancel'
```

**3. User approves:**
```
approve
```

**4. Agent is deployed and scheduled:**
```
Agent deployed successfully ✅
```

---

## 🗃 Database Schema
```sql
CREATE TABLE settings (
  key   TEXT PRIMARY KEY,
  value TEXT
);

CREATE TABLE agents (
  id       INTEGER PRIMARY KEY,
  name     TEXT,
  config   TEXT,
  schedule TEXT,
  sandbox  INTEGER
);

CREATE TABLE logs (
  id         INTEGER PRIMARY KEY,
  agent_id   INTEGER,
  message    TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Server** | Node.js, Express, CORS |
| **LLM (local)** | Ollama — `phi3:mini` |
| **LLM (cloud)** | OpenAI — `gpt-4o-mini` |
| **Browser Automation** | Playwright (Chromium) |
| **Scheduler** | node-cron |
| **Database** | SQLite via `better-sqlite3` |
| **Frontend** | HTML/CSS (no framework) |

---

## 🛣 Roadmap

- [ ] Per-agent custom cron expressions from natural language
- [ ] Real-time execution log streaming in the UI
- [ ] Authentication & multi-user support
- [ ] Web dashboard for managing all agents
- [ ] Additional LLM support: Anthropic Claude, Google Gemini
- [ ] Support for more automation agent types beyond LinkedIn

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes
4. Submit a pull request

---

## 👤 Author

**Atif** — [GitHub](https://github.com/Atif0110)

Built with Node.js, Playwright, and local-first AI automation.

---

## 📄 License

ISC License. See `LICENSE` for details.
