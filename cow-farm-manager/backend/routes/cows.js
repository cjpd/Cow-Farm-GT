const cowRoutes = require('./routes/cows');
app.use('/api/cows', cowRoutes);



const express = require('express');
const router = express.Router();

const mysql = require('mysql2');
const dbConfig = require('../config/db.config');

const connection = mysql.createConnection(dbConfig);

router.get('/', (req, res) => {
  connection.query('SELECT * FROM cows', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error fetching cows');
    } else {
      res.json(results);
    }
  });
});


module.exports = router;
