let arr=[
    {name:'A', age:14, gender: 'M'},
    {name:'B', age:34, gender: 'M'},
    {name:'C', age:24, gender: 'F'},
    {name:'D', age:44, gender: 'F'},
    {name:'E', age:44, gender: 'M'},
    {name:'F', age:28, gender: 'F'},
    {name:'G', age:36, gender: 'M'},
    {name:'H', age:47, gender: 'F'}
    
]


// age of all the men(males)

let males= arr.filter((obj)=>{
    return obj.gender=='M'
}).map((male)=>{
    return male.age
})


console.log(males)

// op- [ 14, 34, 44, 36 ]




// From the transaction array filter out positive elements and calculate the total amount 
// use filter and reduce to achieve this


const transactions=[1000,3000,4000,2000,-898,3800,-4500]

let sumTransactions= transactions.filter((n)=>{
    return n>0
}).reduce((acc, num)=>{
    return acc+num
},0)

console.log(sumTransactions)

// op- 13800
