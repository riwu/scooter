const express = require('express');

const app = express();

app.disable('x-powered-by');
app.use(require('./middleware/healthCheck'));

app.use(express.json());
app.use(require('./middleware/logger'));

app.use('/scooters', require('./routes/scooters'));

app.use(require('./middleware/errorHandler'));

module.exports = app;
