let a=2

let b=3

console.log(a==b)    // false

let c=2
let d=2

console.log(c==d)    // true


let e=2
let f='2'

console.log(e==f)   // true        ...did not check for type    (loose checking)

let g=2
let h='2'

console.log(g === h)      //false       .. checked type therefore false (strict checking)