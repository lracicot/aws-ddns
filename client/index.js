const https = require('https');
const aws4  = require('aws4');

const request = (opts) => https.request(opts, res => res.pipe(process.stdout)).end(opts.body || '');

request(aws4.sign({
  host: 'ddns.louisracicot.net',
  path: '/update',
  service: 'execute-api',
  region: 'ca-central-1'
}));
