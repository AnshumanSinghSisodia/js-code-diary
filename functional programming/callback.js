function printFirstName(firstName, cb){
    console.log(firstName)
    cb('Rogers')
}

function printLastName(lastName){
    console.log(lastName)
}

printFirstName('Steve', printLastName)    //callback

// eg-

const isEven=(n)=>{
    return n%2==0
}

let printResult=(evenFn, num)=>{
    const isNumEven=evenFn(num)
    console.log(`The number ${num} is an even number ${isNumEven}`)
}

printResult(isEven, 16)
