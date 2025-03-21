function Person(_name,_age){
    this.name=_name
    this.age=_age
}

let person1=new Person('Adam',25)

person1.name='Steve'     // we can change the name from outside which should not be allowed.

console.log(person1)     //op- Person { name: 'Steve', age: 25 }

// encapsulation
function PersonEncap(_name,_age){
    var name=_name
    this.age=_age

    this.getName= function(){
        return name
    }
}

let person2=new PersonEncap('Adam',25)


console.log(person2)    //op- PersonEncap { age: 25, getName: [Function (anonymous)] }


console.log(person2.getName())    //op- Adam