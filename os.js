'use strict';
const os = require('os');

console.log('Hostname:', os.hostname());
console.log('Home dir:', os.homedir());
console.log('Temp dir:', os.tmpdir());

setInterval(() => {
  console.log('System uptime:', os.uptime());
  console.log('Free memory:', os.freemem());
  console.log('Total memory:', os.totalmem());
  console.log('CPU cores:', os.cpus().length);
  console.log();
  process.exit()
}, 3000);
