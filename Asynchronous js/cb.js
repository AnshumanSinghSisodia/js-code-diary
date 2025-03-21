const fs = require('fs')

console.log('First line')



let data = fs.readFileSync('f1.txt')

console.log('File 1 data-> '+ data)



console.log('Last line')

// op-
// First line
// File 1 data-> Today is Friday!
// Last line


// Reading a file synchronously  
