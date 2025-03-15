// loops are the statements that we can use to control a flow of the program and to do some repetitive task

var a= 'Hello World!'

for (var i=0; i<10; i++){
    console.log(a)
}

// TASK: you have an array and you have to square each element.

var num=[1,2,3,4,5,6,7,9,8]
var squaredArr=[]

for (var i =0;i<num.length;i++){
    squaredArr.push(num[i]*num[i])
}

console.log(squaredArr)