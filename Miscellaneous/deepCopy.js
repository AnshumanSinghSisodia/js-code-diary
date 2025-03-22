let firstPerson ={
    name: 'Adam',
    age: 23,

    address: {
        city: 'Lucknow',
        state: 'UP'
    }
}

let secondPerson= JSON.parse(JSON.stringify(firstPerson))  // deep copy , totally seperate copy

secondPerson.address.city='Delhi'

console.log(firstPerson)
console.log(secondPerson)

// op-
// { name: 'Adam', age: 23, address: { city: 'Lucknow', state: 'UP' } }
// { name: 'Adam', age: 23, address: { city: 'Delhi', state: 'UP' } }