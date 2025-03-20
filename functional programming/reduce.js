// you need the sum of every element in an array.

let num=[1,2,3,4,10]

let sum=0

for(let i=0;i<num.length;i++){
    sum=sum+num[i]
}

console.log(sum)

// Reduce
// always return a single answer (like sum etc.)

let result=num.reduce((acc, value)=>{     // acc-accumulator
    return acc+value
}, 0)                             // initialise acc to 0

console.log(result)

let product=num.reduce((acc, value)=>{     // acc-accumulator
    return acc*value
}, 1)

console.log(product)