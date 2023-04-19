const medicalRecordsRoutes = require('./routes/medical_records');
app.use('/api/medical_records', medicalRecordsRoutes);


const express = require('express');
const router = express.Router();

const mysql = require('mysql2');
const dbConfig = require('../config/db.config');

const connection = mysql.createConnection(dbConfig);

router.get('/', (req, res) => {
  connection.query('SELECT * FROM medical_records', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error fetching medical records');
    } else {
      res.json(results);
    }
  });
});


module.exports = router;
