// some method 

// Some: Condition Check: To get true or false based on a condition
// it will return true if even 1 or more than 1 element satisfies the condition.


const transactions=[-1000,-3000,-4000,2000,-898,-3800,-4500]

let result= transactions.some((n)=>{
    return n>0
})

console.log(result)  // true 

// every method
// every element should satisfy condition then it will return true

let result2 = transactions.every((n)=>{
    return n>0
})

console.log(result2) // false
