// In javaScript , the for-in loop allows you to loop through the proprties of an object.
// The statements of code found within the loop body will be executed once for each property of the object.

var colors = {
    primary:'Blue',
    secondary: 'Red',
    tertiary: 'White'
}

// syntax

for (var color in colors){
    console.log(color , '->' , colors[color])     // color is the key here
}


var colorsArray=['yellow','green','orange','pink']
for(var color in colorsArray){
    console.log(color,'->',colorsArray[color])
}