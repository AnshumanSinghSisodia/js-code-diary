// Find returns the first element of an array that satisfy the condition

const transactions=[1000,3000,4000,2000,-898,3800,-4500]

let firstWithdrawl= transactions.find((n)=>{
    return n<0
})

console.log(firstWithdrawl)


// findIndex

let firstWithdrawl1= transactions.findIndex((n)=>{
    return n<0
})

console.log('index:',firstWithdrawl1)