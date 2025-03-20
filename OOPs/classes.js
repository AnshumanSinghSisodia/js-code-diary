class Person {
    constructor(_name, _age){
        this.name=_name
        this.age=_age
    }

    welcome(){
        console.log(`Welcome ${this.name}`)
    }
}

let person1= new Person('Adam',19)
let person2= new Person('Steve',29)
let person3= new Person('Mark',25)

person1.welcome()

console.log(person1)
console.log(person2)
console.log(person3)

// op-
// Welcome Adam
// Person { name: 'Adam', age: 19 }
// Person { name: 'Steve', age: 29 }
// Person { name: 'Mark', age: 25 }