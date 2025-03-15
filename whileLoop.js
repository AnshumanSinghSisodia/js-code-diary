// A while loop evaluates the condition inside the parenthesis.
// If the condition evaluates to true , the code inside the while loop is executed.
// the condition is evaluated again.
// This process continues until the condition is false.
// When the condition evaluates to false, the loop stops.

var i=1,j=1   // i,j=1 will only initialise j as 1 NOT i.
var n=10

while(i<=n){
    console.log(i)
    i++
}

do{
    console.log(j)
    j++
}while(j<=n)
