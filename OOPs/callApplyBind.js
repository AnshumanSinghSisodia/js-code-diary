let person1 ={
    firstName: 'Steve',
    lastName: 'Rogers',
    age : 102,

    printDetails: function(){
        console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old.`)
    }
}

let person2 ={
    firstName: 'Tony',
    lastName: 'Stark',
    age : 41

}

// printDetails fn. is repeating ..... problem

// call

person1.printDetails.call(person2)


// person1.printDetails()
// person2.printDetails()

