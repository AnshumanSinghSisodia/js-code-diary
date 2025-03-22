// Reference data types are mutable 
// means  if copy of object is changed then the original also gets affected.

// objects         .........these are reference data types
// arrays
// functions

// they are created in heap memory

let firstPerson ={
    name: 'Adam',
    age: 23
}

let secondPerson= firstPerson

firstPerson.name = 'Steve'

console.log(firstPerson)
console.log(secondPerson)

// op-
// { name: 'Steve', age: 23 }
// { name: 'Steve', age: 23 }