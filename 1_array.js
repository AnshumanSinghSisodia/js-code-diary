// arrays provides you an ordered collection of data

var arr=[12, 'Ferrari', true, 12.4]

console.log(arr)

//accessing the elements

var  a= arr[1]

console.log(a)

console.log(arr[3])

// replacing the elements of an array by using index

arr[1]='bentley'

console.log(arr)

console.log('The length of an array is', arr.length)

// inbuilt js array methods

var arr2=[12, 14, 56, 57]

// pop method

arr2.pop()

console.log('popped array',arr2)

// push method
// add at the end
arr2.push(100)

console.log('pushed array',arr2)

// shift method

var d=arr2.shift()

console.log(d)

console.log('shifted array',arr2)

// unshift array
// just like push --> add value at the starting of the array
arr2.unshift(102)

console.log('unshifted array',arr2)