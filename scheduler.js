const cron = require("node-cron");
const { getAgents } = require("./agentManager");
const { runLinkedInPost, commentHashtag } = require("./playwrightBot");
const db = require("./db");

function startScheduler(){
  console.log("Scheduler started");

  cron.schedule("*/1 * * * *", async ()=>{

    const agents = getAgents();

    for(const a of agents){
      const cfg = JSON.parse(a.config);

      console.log("Running:", a.name);

      if(!a.sandbox){
        if(cfg.type==="post"){
          await runLinkedInPost(cfg.content);
        }

        if(cfg.type==="comment"){
          await commentHashtag();
        }
      } else {
        console.log("Sandbox mode — simulated run");
      }

      db.prepare(
        "INSERT INTO logs(agent_id,message) VALUES (?,?)"
      ).run(a.id,"Executed");
    }

  });
}

module.exports = { startScheduler };
