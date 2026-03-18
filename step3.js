'use strict';

console.log('Platform:', process.platform);
console.log('Current working dir:', process.cwd());
console.log('Memory usage:', process.memoryUsage());
console.log('Environment variables:', process.env);

// process.env.MY_APP_MODE = 'development';
// console.log('New env var:', process.env.MY_APP_MODE);

// // To exit the process:
// setTimeout(() => {
//   console.log('Exiting...');
//   process.exit();
// }, 2000);