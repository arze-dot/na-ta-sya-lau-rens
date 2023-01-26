const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "ezra",
  port: 5432,
  password: "",
  database: "valentine-gift",
});

module.exports = client;
