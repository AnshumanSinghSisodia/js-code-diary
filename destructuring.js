// The destructuring assignment syntax is a Javascript expression that makes it possible to unpack values 
// from arrays, or properties from objects, into distinct variables.


let arr=['Hi','I','am','Anshuman']

//let a=arr[1]
//let b=arr[2]

// console.log(a)
// console.log(b)

let [a,b,c,d,e]=arr      //....destructuring array

console.log(a)
console.log(e)

// destructuring an object

let myObj = {
    name:'Adam',
    age:25,
    gender:'M',

    address:{
        country:'England',
        city:'London'
    }
}

let {p,q,r}=myObj

console.log(p)
console.log(q)
console.log(r)
// output:
// undefined
// undefined
// undefined

// WE NEED TO KEEP THE SAME KEY FOR OBJECT DESTRUCTURING

let {name,age,gender}=myObj

console.log(name)
console.log(age)
console.log(gender)
 
// output:
// Adam
// 25
// M

// alternative

let {name: n,age: z,gender: g,address:{country: co}}=myObj

console.log(n)
console.log(z)
console.log(g)
console.log(co)

// output:
// Adam
// 25
// M
// England

