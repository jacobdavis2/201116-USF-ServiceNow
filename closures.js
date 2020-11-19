// Intuitive that the below works, right?
var counter = 0;

function innerFunction() {
    ++counter;
    console.log(counter);
}

innerFunction(); // 1
innerFunction(); // 2
innerFunction(); // 3

function someOtherFunction() {
    return counter*2;
}


function outerFunction() {

    var counter = 0;

    return function innerFunction() {
        ++counter;
        console.log(counter);
    }
}

var f = (function() { 
    var counter = 0;
    return function() {
        ++counter;
        console.log(counter);
    }
}) ()

var f = outerFunction(); // f() calls innerFunction()
var f = outerFunction; // f() calls outerFunction()

function createDog(name) {
    var dogCounter = 0;

    var newDog = new Object();
    newDog.age = 5;
    newDog.legs = 4;
    newDog.name = name;

    newDog.bark = function() {
        ++dogCounter;
        console.log(`${newDog.name} barked! Count: ${dogCounter}`);
    }

    return newDog;
}

var dog = createDog("Doggie");

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

var dog = new Dog(10, 4, "BigDog");

class MyClass {
    run() {
        console.log("Running!");
    }
}