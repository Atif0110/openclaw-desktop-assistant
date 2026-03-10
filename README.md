# AI Automation Desktop Assistant

An LLM-powered desktop automation assistant designed to execute workflows, automate tasks, and interact with web interfaces using browser automation and intelligent agents.

This project combines **large language models, automation scripts, and task orchestration** to create a system that can perform repetitive digital tasks with minimal human input.

---

## Overview

The AI Automation Desktop Assistant acts as a lightweight agent system that can:

- Execute automated browser tasks
- Route prompts to different LLM providers
- Schedule background tasks
- Store logs and execution data
- Coordinate multiple automation workflows

The goal of the system is to reduce repetitive digital work and explore how **LLM-driven agents can control software tools and workflows**.

---

## Key Features

- **LLM Routing System**  
  Dynamically routes prompts between different models (local or API-based).

- **Automation via Playwright**  
  Uses browser automation to perform tasks such as form submission, navigation, and workflow automation.

- **Task Scheduling**  
  Includes a scheduler that enables automated background task execution.

- **Agent Manager**  
  Manages task execution, agent workflows, and system coordination.

- **Logging & Tracking**  
  Stores system events and execution logs for monitoring and debugging.

- **Modular Architecture**  
  Separate modules for LLM routing, automation, scheduling, and database interaction.

---

## Tech Stack

**Backend**
- Node.js
- Express
- Playwright

**AI / LLM**
- Hugging Face models
- Local LLMs (via Ollama)
- Retrieval-Augmented workflows

**Database**
- SQLite

**Frontend**
- Lightweight UI for interacting with the assistant

---
openclaw-desktop-assistant/
│
├── server.js              # Main application server
├── agentManager.js        # Agent orchestration logic
├── llmRouter.js           # Routes prompts to different LLM providers
├── playwrightBot.js       # Browser automation workflows
├── scheduler.js           # Task scheduling system
├── db.js                  # Database management
│
├── ui/                    # Frontend interface
│
├── package.json
└── package-lock.json

---

## How It Works

1. A task or prompt is sent to the system.
2. The **LLM Router** decides which model should handle the request.
3. The **Agent Manager** coordinates task execution.
4. If automation is required, the **Playwright bot** performs browser actions.
5. Logs and outputs are stored in the database for tracking and debugging.

This architecture allows the assistant to function as a **general-purpose automation agent**.

---

## Example Use Cases

- Automating LinkedIn workflows
- Running repetitive browser tasks
- Scheduling automated research jobs
- Experimenting with LLM-driven software agents
- Building autonomous automation pipelines

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Atif0110/openclaw-desktop-assistant.git
cd openclaw-desktop-assistant

Install dependencies:

npm install

Run the server:

node server.js

## Project Structure
