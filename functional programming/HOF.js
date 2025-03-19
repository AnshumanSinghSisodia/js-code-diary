//

let arr=[1,2,3,4,5]

let squaredArr=[]

for(let i=0; i<arr.length;i++){
    squaredArr.push(arr[i]*arr[i])
}

console.log(squaredArr)

// Map

// Map will loop through every element of your array and wiil perform specific operations that you have provided.

// Map method will always return a new array with your results

const num=[1,2,3,4,5]

const squaredNum=num.map(function(n){
    return n*n
})

console.log(squaredNum)

// eg-

const transactions=[1000,3000,4000,2000,-898,3800,-4500]

const intoDollar=80

const transactionsDollar= transactions.map((n)=>{
    return (n/80).toFixed(0)
})

console.log(transactionsDollar)

// op-
// [
//     '13',  '38',
//     '50',  '25',
//     '-11', '48',
//     '-56'
//   ]    //array

// forEach
const transactionsDollar1= transactions.forEach((n)=>{
    return (n/80).toFixed(0)
})

console.log(transactionsDollar1)  // op- undefined 

const transactionsDollar2= transactions.forEach((n)=>{
    console.log((n/80).toFixed(0)) 
})

// op-
// undefined
// 13
// 38
// 50
// 25
// -11
// 48
// -56 
// NO array , just straight values