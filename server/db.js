const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'root',
  password: 'root',
  database: 'my_db',
  host: 'localhost',
  port: 5431,
});

module.exports = pool;
