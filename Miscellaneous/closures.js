// function test(){
//     let a=2

//     function test1(){
//         console.log(a)
//     }
//     return test1
// }

// let fun = test()

// console.log(fun)
// fun()

// // op-
// // [Function: test1]
// // 2

function greet(){
    let name = 'Steve'

    function displayName(){
        console.log('Hi '+ name)

        let age =25

        function displayAge(){
            console.log('My age is '+ age)
        }
        return displayAge
    }

    return displayName
}

let g1 = greet()
// console.log(g1)

// g1() // display name

let g2= g1()
// console.log(g2)

g2()  // display age

// op-
// Hi Steve
// My age is 25