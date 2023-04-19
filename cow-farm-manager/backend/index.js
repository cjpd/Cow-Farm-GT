const cowRoutes = require('./routes/cows');
const medicalRecordsRoutes = require('./routes/medical_records')
const birthsRoutes = require('./routes/births');
const movementsRoutes = require('./routes/movements');

app.use('/api/cows', cowRoutes);
app.use('/api/medical_records', medicalRecordsRoutes);
app.use('/api/births', birthsRoutes);
app.use('/api/movements', movementsRoutes);


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Cow Farm Manager API');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
