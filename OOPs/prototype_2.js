function Person(_name,_age){
    this.name=_name
    this.age=_age

}

Person.prototype.getNameAndAge = function(){
    console.log(`I am ${this.name} and my age is ${this.age}`)
}

let person1 = new Person('Adam', 25)
let person2 = new Person('Steve', 30)

console.log(person1)
console.log(person2)

console.log(person1.getNameAndAge())

// op-
// Person {name: 'Adam', age: 25}
// Person {name: 'Steve', age: 30}    //getNameAndAge fn inside prototype
// I am Adam and my age is 25     