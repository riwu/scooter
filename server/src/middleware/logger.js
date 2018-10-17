const morgan = require('morgan');

module.exports = morgan((tokens, req, res) => [
  tokens.method(req, res),
  tokens.url(req, res),
  tokens['response-time'](req, res),
  'ms',
  req.headers['x-forwarded-for'],
  JSON.stringify(req.cookies),
  JSON.stringify(req.body),
].join(' '));
