const express = require('express');
const mysql = require('mysql2');

const app = express();

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Yashu@123',
  database: 'testdb' // Make sure this database exists
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connection has been created");

  // Table creation query
  const creationQuery = `
    CREATE TABLE IF NOT EXISTS Students (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(20),
      email VARCHAR(20)
    )
  `;

  connection.execute(creationQuery, (err) => {
    if (err) {
      console.log(err);
      connection.end();
      return;
    }
    console.log("Table is created");
  });
});

// Express route
app.get('/', (req, res) => {
  res.send("Hello world");
});

// Start server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
