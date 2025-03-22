let a =2
console.log(typeof a)

let b ='Anshuman'
console.log(typeof b)

let c =true
console.log(typeof c)

// op-
// number
// string
// boolean

let myObj={
    name: 'Anshuman',
    age:23
}

console.log(typeof myObj)    // object

let arr= [1,2,3]
console.log(typeof arr + ' Array')    // op- object Array  .... array is object in js.


// isArray method...to check if array
let checkArray= Array.isArray(arr)
console.log(checkArray)             // op - true