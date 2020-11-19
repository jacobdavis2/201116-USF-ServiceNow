
class Dog {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.barkCount = 0;
    }

    bark() {
        console.log(`${this.name} just barked!`);
    }
}

function Dog(age, legs, name) {
    this.age = age;
    this.legs = legs;
    this.name = name;

    var dogCounter = 0;

    this.bark = function() {
        ++dogCounter;
        console.log(`${this.name} barked! Count: ${dogCounter}`);
    }
}

let dog2 = new Dog("Spot", 1, "Lab");  // Insantiating the class
dog2.bark();

class GermanShephard extends Dog {
    constructor(name, age) {
        super(name, age, "German Shephard");
    }

    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }
}

class Boat {
    constructor(size = 10, topSpeed = 1) {
        this._size = size;
        this._topSpeed = topSpeed;
    }

    get size() {
        return this._size;
    }

    set size(size) {
        if (size <= 100) {
            this._size = size;
        }
        else this._size = 100;
    }
}