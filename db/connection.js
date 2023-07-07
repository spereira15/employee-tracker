const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables from .env file

function createConnection() {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  return connection;
}

module.exports = createConnection;
