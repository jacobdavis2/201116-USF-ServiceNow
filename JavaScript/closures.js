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

// Closures are like the above but inside of a function
function outerFunction() {

    var counter = 0;

    return function innerFunction() {
        ++counter;
        console.log(counter);
    }
}

// You can also get this behavior with a self-invoking
// function, like below.
var f = (function() { 
    var counter = 0;
    return function() {
        ++counter;
        console.log(counter);
    }
}) ()

var f = outerFunction(); // f() calls innerFunction()
var f = outerFunction; // f() calls outerFunction()

// Class-like behavior with private variables is possible
// thanks to closures.
// In the factory method below, dogCounter is only accessible 
//via the bark func
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

// Calling the factory function gives us an Object configured as
// a dog, with variables and a bark()
var dog = createDog("Doggie");

// We can do the same as the above with constructor functions,
// like the one below
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
    constructor() {
        let timesJogged = 0;

        this.jog = function() {
            ++timesJogged;
            console.log(`Jogged ${timesJogged} times.`);
        }
    }

    run() {
        console.log("Running!");
    }
}