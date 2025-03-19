// you have to check for even numbers in an array and put them in a seperate array

let numbers=[1, 2, 20, 35, 12, 17, 46]

let evenArr=[]

for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2==0){
        evenArr.push(numbers[i])
    }
}

console.log(evenArr)


// filter method
// Filter returns a new array it will return all those elements that matches the specific condition.
// if the condition is true it will return the element for that condition and if it is false it will discard that element.

let num= [1, 2, 20, 35, 12, 17, 46]

let evenNum= num.filter((n)=>{
    return n%2==0
})

console.log(evenNum)

