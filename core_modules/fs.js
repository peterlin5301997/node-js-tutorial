const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
  if (err) throw err;
  console.log('Folder created...');
})

// Write to file // overwrites anything in the file
fs.writeFile(path.join(__dirname, '/test', 'hello.html'), 'Hello World!', err => {
  if (err) throw err;
  console.log('File written to...')
})

// Append to file
fs.appendFile(path.join(__dirname, '/test', 'hello.html'), ' I love Node.js!', err => {
  if (err) throw err;
  console.log('File appended to...')
})

// Read file // utf8 to read language
fs.readFile(path.join(__dirname, '/test', 'hello.html'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data)
})

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.html'), path.join(__dirname, '/test', 'helloworld.txt'), err => {
  if (err) throw err;
  console.log('File renamed...');
})
