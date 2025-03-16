var a= 21

var a=35   // redeclaration of variable .....problem 1  (should not be allowed) security issue

console.log(a)



if(a==35){
    var b=10
    console.log(b)
}

console.log(b)   // prints 10 even though it is outside if block.

// problem 2 ... variables declared with var keyword are not blocked scoped they are function scoped.

function test(){
    var c = 100
    console.log(c)
}
test()   // op- 100
console.log(c)    // error