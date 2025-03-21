class Animal{
    sound(){
        console.log('Animals make different sounds.')
    }
}

class Dog{

    sound(){
        console.log('Dog Barks.')
    }
}

class Cat{

    sound(){
        console.log('Cat Meows.')
    }
}

let Animal1= new Animal()

let tommy =new Dog()

let percy = new Cat()

Animal1.sound()
tommy.sound()
percy.sound()

// op-
// Animals make different sounds.
// Dog Barks.
// Cat Meows.
// same function name but behaves differently for different objects 