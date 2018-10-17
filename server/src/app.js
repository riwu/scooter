const express = require('express');

const app = express();

app.disable('x-powered-by');
app.use(require('./middleware/healthCheck'));

app.use(express.json());
app.use(require('./middleware/logger'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/scooters', require('./routes/scooters'));

app.use(require('./middleware/errorHandler'));

module.exports = app;
