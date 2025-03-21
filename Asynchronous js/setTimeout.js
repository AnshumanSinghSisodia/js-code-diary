// setTimeout(cb, 2000)  //2000 = 2sec

console.log('before')


function greet(){
    console.log('Hello from setTimeout.')
}

setTimeout(greet,2000)   //its a async fn

console.log('after')

// op-
// before
// after
// Hello from setTimeout.