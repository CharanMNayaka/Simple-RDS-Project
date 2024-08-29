const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());

// app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files (HTML, CSS, JS)

// MySQL connection
const connection = mysql.createConnection({
  host: 'end point  .',
  user: 'username',
  password: 'password',
  database: 'databasename'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});

// API endpoint to store message
app.post('/message', (req, res) => {
  const { message } = req.body;
  const query = 'INSERT INTO messages (content) VALUES (?)';
  connection.query(query, [message], (err, results) => {
    if (err) {
      console.error('Error inserting message:', err);
      res.status(500).send('Server error');
      return;
    }
    res.send('Message stored successfully');
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
