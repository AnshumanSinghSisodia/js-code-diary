// the for-of statement creates a loop iterating over iterable objects.
// including : built-in String, Array, array-like objects like NodeList and also map and set

var scores=[60,70,80,90]

// syntax

for(var score of scores){   // --->>>> score <<<<--- is the value here
    console.log(score)
}

// method - entries()

let colors=['Red','White','Green']

for(var [index, color] of colors.entries()){
    console.log(index,'->',color)
}

// Strings

var str='Anshuman'

for (var c of str){
    console.log(c)
}
