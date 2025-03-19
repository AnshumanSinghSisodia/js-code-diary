var a=2

function add(x){
    console.log(x+a)
    a++
}

add(2)
add(2)
add(2)
add(2)

// op-
// 4
// 5
// 6
// 7  
//for same input 2 fn is giving different output due to an external factor a , hence impure fn

// Pure fn

function addpure(a,x){
    return a+x
}

console.log(addpure(2,3))
console.log(addpure(2,3))
console.log(addpure(2,3))

// same output for above same values , hence pure fn