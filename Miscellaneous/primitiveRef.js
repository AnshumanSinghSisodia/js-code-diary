// Primitive data types are immutable
// means  if copy of object is changed then the original does NOT get affected.

// numbers      .......these are primitive
// Strings
// null
// Boolean
// undefined

// they are created in stack memory


let firstPerson ='Adam'

let secondPerson= firstPerson

firstPerson = 'steve'

console.log(firstPerson)
console.log(secondPerson)

// op-
// steve
// Adam