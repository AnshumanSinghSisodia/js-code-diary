// how to produce a promise

let myPromise = new Promise(function(resolve, reject){
    const a= 4
    const b= 4

    setTimeout(()=>{
        if(a==b){
            resolve()
        }
        else {
            reject()
        }
    })
})

console.log(myPromise)

// pending stage
// op- Promise { <pending> }

