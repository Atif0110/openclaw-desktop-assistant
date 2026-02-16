const cron = require("node-cron");
const { getAgents } = require("./agentManager");
const { runLinkedInPost, commentHashtag } = require("./playwrightBot");
const db = require("./db");

function startScheduler(){
  getAgents().forEach(a=>{
    cron.schedule(a.schedule, async ()=>{
      const cfg = JSON.parse(a.config);

      if(!a.sandbox){
        if(cfg.type==="post"){
          await runLinkedInPost(cfg.content);
        }
        if(cfg.type==="comment"){
          await commentHashtag();
        }
      }

      db.prepare(
        "INSERT INTO logs(agent_id,message) VALUES (?,?)"
      ).run(a.id,"Executed");
    });
  });
}

module.exports = { startScheduler };
