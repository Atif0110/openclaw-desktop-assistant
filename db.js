const Database = require("better-sqlite3");

const db = new Database("./data/app.db");

db.exec(`
CREATE TABLE IF NOT EXISTS settings(
  key TEXT PRIMARY KEY,
  value TEXT
);

CREATE TABLE IF NOT EXISTS agents(
  id INTEGER PRIMARY KEY,
  name TEXT,
  config TEXT,
  schedule TEXT,
  sandbox INTEGER
);

CREATE TABLE IF NOT EXISTS logs(
  id INTEGER PRIMARY KEY,
  agent_id INTEGER,
  message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`);

module.exports = db;
