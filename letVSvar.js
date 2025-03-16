var a= 20

var a=35

// redeclaration problem solved
let b=20

let b=45 // Error  .....redeclaration NOT allowed 

console.log(a)
console.log(b)


//scoping problem

if(true){
    let c=40
    console.log(c)   //op- 40
}

//variables declared with let keyword are block scoped
console.log(c)  //error... can NOT access c outside if



const d=100
const d=105  //error  ....redeclaration NOT allowed for const

d=103 //error  ....reassignment NOT allowed for const  

console.log(d)
