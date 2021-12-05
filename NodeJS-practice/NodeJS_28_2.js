let fs = require('fs');

// readFileSync
/*
console.log('A');
let result = fs.readFileSync('28_2.txt', 'utf-8');
console.log(result);
console.log('C');
*/

// readFile
console.log('A');
fs.readFile('28_2.txt', 'utf-8', function(err, result){
  console.log(result);
});
console.log('C');