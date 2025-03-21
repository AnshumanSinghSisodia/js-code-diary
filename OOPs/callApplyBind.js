let person1 ={
    firstName: 'Steve',
    lastName: 'Rogers',
    age : 102

    
}

let printDetails= function(){
    console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old.`)
}

let person2 ={
    firstName: 'Tony',
    lastName: 'Stark',
    age : 41

}

// printDetails fn. is repeating ..... problem

// call

printDetails.call(person2)
printDetails.call(person1)  
// op-
// Hi I am Tony Stark and I am 41 years old.
// Hi I am Steve Rogers and I am 102 years old.


// person1.printDetails()
// person2.printDetails()

