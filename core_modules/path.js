const path = require('path');

// Base file name
console.log(path.basename(__filename));

// Directory basename
console.log(path.dirname(__filename)); // same as __dirname

// File extension
console.log(path.extname(__filename));

// Concatenate paths
// target path: ../test/hello.html
console.log(path.join(__filename, 'test', 'hello.html'))
