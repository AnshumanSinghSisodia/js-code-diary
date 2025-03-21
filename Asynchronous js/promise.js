// how to produce a promise

let myPromise = new Promise(function(resolve, reject){
    const a= 4
    const b= 5

    setTimeout(()=>{
        if(a===b){
            resolve('The values are equal.')
        }
        else {
            reject('The values were not equal.')
        }
    }, 2000)
})

//console.log(myPromise)

// pending stage
// op- Promise { <pending> }

// fulfilled-  then method

myPromise.then(function(result){
    console.log(result)
}).catch(function(failedResult){ 
    // rejected  - catch method
    console.log(failedResult)
})




// at last your promise will get settled.
