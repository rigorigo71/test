console.log("Platform type: ", process.platform());
console.log("Current Working Directory: ", process.cwd());
console.log("Memory Usage: ", process.memoryUsage());
// process.env.MY_APP_MODE = 'development';
// console.log('New env var:', process.env.MY_APP_MODE);

setTimeout(() => {
  console.log('Exiting...');
  process.exit();
}, 3000);