let myObj = {}

console.log(myObj)


let person1 = {
    name: 'Adam',
    age: 25
}

console.log(person1)

console.log(person1.hasOwnProperty('name'))    // true

console.log(person1.hasOwnProperty('gender'))    // false

// this hasOwnProperty and some other methods are defined inside the prototype object which is created by default.





// constructor fn

function Person(_name,_age){
    this.name=_name
    this.age=_age
}

let person2 = new Person('Steve', 30)

console.log(person2)