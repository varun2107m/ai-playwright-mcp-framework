# 🚀 AI-Powered Playwright MCP Framework

An intelligent QA automation framework that enables **AI-driven test generation, execution, and improvement** using:

- 🎭 Playwright (browser automation)
- 🧠 Model Context Protocol (MCP)
- 🤖 Cline (AI execution agent)

---

## 📌 Overview

This framework transforms traditional QA automation by allowing AI to:

- Explore applications like a real user  
- Generate Playwright test cases  
- Validate UI behavior  
- Review and improve test quality  

> Instead of manually writing test scripts, tests are **generated and validated based on actual application behavior**.

---

## 🧠 Core Concept

### Traditional QA
- Manual test case creation  
- Static automation scripts  

### This Framework
- AI explores → generates → validates → improves  

👉 Creates a **continuous feedback loop for smarter test automation**

---

## 🏗️ Architecture
User
↓
Cline (AI Agent)
↓
MCP Layer
├── Prompts (AI instructions)
├── Services (orchestration)
├── Tools (Playwright actions)
↓
Playwright Engine
↓
Browser (Real Execution)
↓
Output (Tests / Insights / Bugs)


---

## 📁 Project Structure
mcp/
├── prompts/ # AI instructions (test generation, bug finding)
├── tools/ # Playwright action wrappers
├── services/ # Orchestration logic
└── server.ts # MCP server

pages/ # Page Object Model (POM)

tests/
└── ui/e2e/ # Test cases (AI-generated + manual)

scripts/ # Generate / Review / Fix workflows
utils/ # Helper utilities

.vscode/settings.json # MCP configuration


---

## ⚙️ Setup

### 1. Install dependencies

```bash
npm install
npx playwright install

**### 2. Configure MCP**

Add the following in .vscode/settings.json:
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}

**3. Install and configure Cline**
Install Cline extension in VS Code
Add your API key (OpenAI / Anthropic)
Open the Cline panel

**How to Use**
Run prompts directly via Cline:
Go to https://www.saucedemo.com/

Test login functionality:
- empty input
- invalid credentials
- valid login

Generate Playwright test with assertions

**Key Features**
🤖 AI-driven test generation
🌐 Real browser interaction via MCP
🧪 Automated QA exploration
🔁 Self-improving test loop
🧱 Page Object Model (POM) support
