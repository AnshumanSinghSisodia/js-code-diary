class Person{
    constructor(_name, _age){
        this.name=_name
        this.age=_age
    }
}

class Teacher extends Person{
    constructor(_name, _age, _classStrength){
        super(_name, _age)                   // inherit the parameters from parent class
        this.classStrength= _classStrength
    }
}

let person1= new Person('Adam', 23)

let teacher1 =new Teacher('Mark', 40, 75)

console.log(person1)
console.log(teacher1)