const fs = require('fs')

console.log('First line')



// let data = fs.readFileSync('f1.txt')

// console.log('File 1 data-> '+ data)




// op-
// First line
// File 1 data-> Today is Friday!
// Last line


// Reading a file synchronously  




fs.readFile('f1.txt' , cb1)

function cb1(err, data){
    if(err){
        console.log(err)
    }
    console.log('File 1 data -> '+ data)
}



fs.readFile('f2.txt' , cb2)

function cb2(err, data){
    if(err){
        console.log(err)
    }
    console.log('File 2 data -> '+ data)
}




console.log('Last line')


// op-
// First line
// Last line
// File 1 data -> Today is Friday!
// File 2 data -> I am file 2 data.

// it executed console.log('Last line') first then the files as all are executed parallely and 
// which ever took the shortest time gets executed first.