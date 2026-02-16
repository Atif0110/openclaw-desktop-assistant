const express = require("express");
const cors = require("cors");

const db = require("./db");
const { chat } = require("./llmRouter");
const { createAgent } = require("./agentManager");
const { startScheduler } = require("./scheduler");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req,res)=>{
  const reply = await chat(req.body.message);
  res.json({reply});
});

app.post("/setKey",(req,res)=>{
  db.prepare(
   "INSERT OR REPLACE INTO settings(key,value) VALUES('apiKey',?)"
  ).run(req.body.key);
  res.sendStatus(200);
});

app.post("/createAgent",(req,res)=>{
  createAgent(req.body);
  res.sendStatus(200);
});

app.get("/logs",(req,res)=>{
  const logs = db.prepare("SELECT * FROM logs").all();
  res.json(logs);
});

app.post("/setup",(req,res)=>{
  res.json({
   message:"OpenClaw setup simulated. Dependencies OK."
  });
});

app.listen(3001,()=>{
  startScheduler();
  console.log("Server running on 3001");
});
