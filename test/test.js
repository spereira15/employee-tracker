const connection = require('../db/connection');

function testConnection() {
  connection.connect((error) => {
    if (error) {
      console.error(`Error connecting to the database: ${error.message}`);
    } else {
      console.log('Database connection established successfully!');
    }
  });
}

testConnection();
