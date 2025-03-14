// in JS objects are in key value pairs

var person={
    firstName: 'Adam',
    lastName: 'Smith',
    age: 25,
    ownCar: false
}

console.log(person)

// access  value from inside an object
// dot notation

console.log('age is',person.age)

// bracket notation

console.log(person['firstName'])

var cap={
    firstName:'Steve',
    lastName:'Rogers',
    age:102,

    friends:['Bucky Barnes','Bruce Banner','Tony Stark'], //array used

    isAvenger: true,

    address:{                       //object inside object
        state: 'New York',
        city:{
            name:'Brooklyn',
            pincode:123456
        }
    }
}

console.log(cap.friends[1])  //Bruce Banner

console.log(cap.address.city.name) //Brooklyn

cap.isAvenger=false
console.log(cap)

// add new property to the array
cap.movies=['age of ultron','civil war','first avenger']

console.log(cap)

// delete a property
delete cap.age
console.log(cap)

// can also add functions inside an object