// spread operator  {...}

let firstPerson ={
    name: 'Adam',
    age: 23,

    address: {
        city: 'Lucknow',
        state: 'UP'
    }
}

let secondPerson= {...firstPerson}   // shallow copy

secondPerson.name='Steve'

secondPerson.address.city= 'Delhi'

console.log(firstPerson)
console.log(secondPerson)

// op-
// { name: 'Adam', age: 23, address: { city: 'Delhi', state: 'UP' } }
// { name: 'Steve', age: 23, address: { city: 'Delhi', state: 'UP' } }
// secondPerson changed but firstPerson did not   
// BUT address object again needed shallow copy for working but it becomes tedious to do again and again
// so we need Deep copy.