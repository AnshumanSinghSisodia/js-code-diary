let sum= function(x,y){
    console.log(x+y)
}

sum(2,3)

let sumCurried= function(x){
    return function(y){
        console.log(x+y)
    }
}

let sumTwoNums= sumCurried(2)

console.log(sumTwoNums)   // op- [Function (anonymous)]\

sumTwoNums(3)   // op- 5