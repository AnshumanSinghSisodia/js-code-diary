class Person{
    constructor(_name, _age){
        this.name=_name
        this.age=_age
    }

    welcome(){
        console.log(`Welcome ${this.name}`)
    }
}

class Teacher extends Person{
    constructor(_name, _age, _classStrength){
        super(_name, _age)                   // inherit the parameters from parent class
        this.classStrength= _classStrength
    }

    test(){
        super.welcome()
    }
}

let person1= new Person('Adam', 23)

let teacher1 =new Teacher('Mark', 40, 75)
teacher1.test()


console.log(person1)
console.log(teacher1)

// op-
// Welcome Mark
// Person { name: 'Adam', age: 23 }
// Teacher { name: 'Mark', age: 40, classStrength: 75 }