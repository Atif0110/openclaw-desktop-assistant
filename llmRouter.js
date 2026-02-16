const axios = require("axios");
const db = require("./db");

function getApiKey(){
  const row = db.prepare(
    "SELECT value FROM settings WHERE key='apiKey'"
  ).get();
  return row?.value;
}

async function localLLM(prompt){
  const r = await axios.post(
    "http://localhost:11434/api/generate",
    { model:"phi3:mini", prompt, stream:false }
  );
  return r.data.response;
}

async function externalLLM(prompt){
  const key = getApiKey();

  const r = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model:"gpt-4o-mini",
      messages:[{role:"user",content:prompt}]
    },
    { headers:{Authorization:`Bearer ${key}`} }
  );

  return r.data.choices[0].message.content;
}

async function chat(prompt){
  return getApiKey()
    ? externalLLM(prompt)
    : localLLM(prompt);
}

module.exports = { chat };
