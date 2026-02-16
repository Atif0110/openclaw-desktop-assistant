const db = require("./db");

function createAgent(agent){
  db.prepare(`
    INSERT INTO agents(name,config,schedule,sandbox)
    VALUES (?,?,?,?)
  `).run(
    agent.name,
    JSON.stringify(agent),
    agent.schedule,
    agent.sandbox ? 1 : 0
  );
}

function getAgents(){
  return db.prepare("SELECT * FROM agents").all();
}

module.exports = { createAgent, getAgents };
