const { createPool } = require("mysql2/promise");
const dbConfig = require("./config/db.config.js");

const pool = createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

module.exports = pool;
