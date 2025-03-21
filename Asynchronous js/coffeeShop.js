function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if(drink==='coffee'){
            resolve('Order for coffee received')
        }
        else{
            reject('Other orders rejected.')
        }
    })
}

function processOrder(order){
    return new Promise (function(resolve){          // cannot reject order after taking order.
        console.log('Order is being processed.')
        resolve(`${order} and is served.`)
    })
}

// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced)
//     let orderIsPlaced = processOrder(orderPlaced)
//     return orderIsPlaced
// }).then(function(processedOrder){
//     console.log(processedOrder)
// }).catch(function(err){
//     console.log(err)
// })  // chaining of promise




// Async Await - keywords

async function serveOrder(){
    try {
        let orderPlaced = await placeOrder('soup')
        console.log(orderPlaced)
        let processedOrder= await processOrder(orderPlaced)
        console.log(processedOrder)
    } catch (error) {
        console.log(error)
    }
}


serveOrder()