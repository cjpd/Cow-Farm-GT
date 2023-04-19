const movementsRoutes= require('./routes/movements');
app.use('/api/movements', movementsRoutes);


const express = require('express');
const router = express.Router();

const mysql = require('mysql2');
const dbConfig = require('../config/db.config');

const connection = mysql.createConnection(dbConfig);

router.get('/', (req, res) => {
  connection.query('SELECT * FROM movements', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error fetching movements');
    } else {
      res.json(results);
    }
  });
});


module.exports = router;