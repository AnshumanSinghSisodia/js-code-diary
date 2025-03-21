
function hello(){
    console.log('hello')
}


let timer = setInterval(hello, 2000)    // after the interval fn will keep executing like here after every 2 sec will print hello.


setTimeout(function(){
    clearInterval(timer)
}, 6000)                       // after 6 sec it will stop.


// op-
// hello
// hello