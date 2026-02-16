const express = require("express");
const cors = require("cors");

const db = require("./db");
const { chat } = require("./llmRouter");
const { createAgent } = require("./agentManager");
const { startScheduler } = require("./scheduler");

const app = express();
app.use(cors());
app.use(express.json());

let pendingAgent = null;

/* ---------------- CHAT ---------------- */

app.post("/chat", async (req,res)=>{
  const msg = req.body.message.toLowerCase().trim();
  console.log("CHAT:", msg);

  /* SETUP */
  if(msg.includes("setup")){
    return res.json({
      reply:
        "Detecting OS...\n" +
        "Checking dependencies...\n" +
        "Installing OpenClaw...\n" +
        "Setup complete ✅\n\n" +
        "You can now create agents!"
    });
  }

  /* CREATE TRENDING AGENT */
  if(msg.includes("trending")){
    pendingAgent = {
      name:"TrendingAgent",
      type:"post",
      content:"Posting about trending OpenClaw topics 🚀",
      schedule:"*/5 * * * *",
      sandbox:1
    };

    return res.json({
      reply:
        "Trending LinkedIn Agent Preview:\n\n" +
        "Goal: Post trending OpenClaw topics\n" +
        "Schedule: Every 5 minutes\n" +
        "Sandbox: ON\n\n" +
        "Type 'approve' or 'cancel'"
    });
  }

  /* CREATE HASHTAG AGENT */
  if(msg.includes("hashtag")){
    pendingAgent = {
      name:"HashtagAgent",
      type:"comment",
      content:"#openclaw promo",
      schedule:"*/10 * * * *",
      sandbox:1
    };

    return res.json({
      reply:
        "Hashtag Comment Agent Preview:\n\n" +
        "Goal: Comment on #openclaw posts\n" +
        "Schedule: Every 10 minutes\n" +
        "Sandbox: ON\n\n" +
        "Type 'approve' or 'cancel'"
    });
  }

  /* APPROVE */
  if(msg==="approve" && pendingAgent){
    createAgent(pendingAgent);
    pendingAgent = null;

    return res.json({reply:"Agent deployed ✅"});
  }

  /* CANCEL */
  if(msg==="cancel"){
    pendingAgent=null;
    return res.json({reply:"Cancelled."});
  }

  /* FALLBACK LLM */
  const reply = await chat(req.body.message);
  res.json({reply});
});

/* SETTINGS */

app.post("/setKey",(req,res)=>{
  db.prepare(
   "INSERT OR REPLACE INTO settings(key,value) VALUES('apiKey',?)"
  ).run(req.body.key);
  res.sendStatus(200);
});

/* LOGS */

app.get("/logs",(req,res)=>{
  res.json(db.prepare("SELECT * FROM logs").all());
});

/* START */

app.listen(3001,()=>{
  startScheduler();
  console.log("Server running 3001");
});
