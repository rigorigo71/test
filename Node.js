'use strict';
const path = require('path'); //this only works within node js engine

console.log('parse:', path.parse(__filename)); //gives information about the file you are currently at as an array
console.log('basename:', path.basename(__filename)); //gives basename of current file
console.log('dirname:', path.dirname(__filename)); //gives the directory name of your current file
console.log('extname:', path.extname(__filename)); //gives extension name of current file (in this case .js)

console.log('current filename:', __filename); //gives name of the current file 
console.log('current dirname:', __dirname); //gives the directory name of current file


console.log("\nnewdir: " , path.join('/foo', 'bar', 'baz/asdf', 'quux'));