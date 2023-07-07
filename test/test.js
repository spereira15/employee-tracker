const createConnection = require('../db/connection');

async function testConnection() {
    const connection = createConnection();
  
    try {
      await connection.connect();
      console.log('Database connection successful!');
    } catch (error) {
      console.error('Error connecting to the database:', error.message);
    } finally {
      connection.end();
    }
  }

  testConnection();
