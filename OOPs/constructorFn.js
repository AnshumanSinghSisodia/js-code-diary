function createCar(_name,_company,_color){      // like a template.....
    this.name=_name
    this.company= _company
    this.color= _color

    this.drive= function(){
        console.log(`I am driving ${this.name} and it is of ${this.color} color.`)
    }
}

let car1= new createCar('X4', 'BMW', 'Red')

console.log(car1)

car1.drive()