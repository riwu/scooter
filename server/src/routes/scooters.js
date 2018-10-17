const express = require('express');
const queries = require('../database/queries');

const router = express.Router();

router.get('/', (req, res, next) => {
  queries
    .getScooters(req.query)
    .then(rows => res.send(rows))
    .catch(next);
});

module.exports = router;
