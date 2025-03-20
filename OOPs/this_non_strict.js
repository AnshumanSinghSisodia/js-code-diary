// 1.

console.log(this)   //op- {}   empty object

// 2.

function displayThis(){
    console.log(this)
}

displayThis()      //op- Global object 

// 3.

let myobj= {
    name: 'Anshuman',
    age: 22,

    myFn : function(){
        console.log(this)
    }
}

myobj.myFn()   //op- { name: 'Anshuman', age: '22', myFn: [Function: myFn] }   refers to object itself.

// 4.

let myObj2= {
    name: 'Anshuman',
    age : 22,

    myFn2: function(){
        function myFn3(){
            console.log(this)
        }
        myFn3()
    }
}

myObj2.myFn2()    // op- Global object