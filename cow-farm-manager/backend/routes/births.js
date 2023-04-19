const birthsRoutes = require('./routes/births');
app.use('/api/births', birthsRoutes);

const express = require('express');
const router = express.Router();

const mysql = require('mysql2');
const dbConfig = require('../config/db.config');

const connection = mysql.createConnection(dbConfig);

router.get('/', (req, res) => {
  connection.query('SELECT * FROM births', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error fetching births');
    } else {
      res.json(results);
    }
  });
});


module.exports = router;