// every statement in js has boolean value

let a=2
if(a){
    console.log('I am truthy')
}
else {
    console.log('I am Falsy')
}            
// op- I am truthy

let b=0
if(b){
    console.log('I am truthy')
}
else {
    console.log('I am Falsy')
} 
// op- I am falsy



////// FALSY values

// false
// 0 (zero)
// -0 (minus zero)
// 0n (bigint zero)
// '', "", `` (empty string)
// null
// undefined
// NaN