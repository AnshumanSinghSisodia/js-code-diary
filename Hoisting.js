console.log(a)  // op- undefined
greet()   // op- Its holi time

add(2,4)  // op- Error add is undefined at start , cannot call an undefined value(obviously) , hence 
          // will show add is not a function.

var a='hi'

function greet(){
    console.log('Its holi time')
}

var add=function(a,b){
    console.log(a+b)                 // should use this method so that we should not let call a 
                                        //fn before declaring them. (better way)
}

