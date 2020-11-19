var variable; // Declaration of a variable.
var variable2 = 1; // Initialization of variable.
variable = 1; // Assignment of a value to a variable.
// global scope ^

{
    var i = 0; // block scope
}

function doStuff() {
    var i = 0; // function scope

    if (i) {
        var j = 0; // block scope
        let k = 0; // block scope, not hoisted
        console.log("If executed!");
        // do stuff
    }
}

// Function to test overshadowing with let
function scopes() {
    var i = 1;

    if (i) {
        let i = 0;

        console.log(i);
    }

    console.log(i);
}

if (5 == "5") {
    console.log("wow!");
}

if (5 === "5") {
    console.log("No way");
}

if (true) {
    console.log("Its true!");
}

if (5 !== "5") {
    console.log("Oh my!");
}

function myFunc(param1, param2) {
    param1 += 1;
    param2 = param2 * 100;
    return param1 + param2;
}

var objectString = '{ "age": 100, "favoriteMovie": "Saving Private Ryan", "kingsley": "yes"}';
var object = JSON.parse(objectString);
console.log(object.age);
console.log(object.kingsley);
console.log(JSON.stringify(object));

let obj = '{ "0": "hello", "1": "world" }';
console.log(JSON.parse(obj));
let objParsed = JSON.parse(obj);
console.log(objParsed[0]);
//         0  1  2  3; length = 4
var arr = [1, 2, 5, 9];

// for loops
for (let i = 0; i < arr.length; ++i) {
    let value = arr[i];

    console.log("Item " + i + ": " + value);
}

for (let i = 0; i <= arr.length - 1; i++) {

}

// while loop
let done = false;
while (!done) {
    // do something as long as done is false
}

// switch
let sw = 4;
switch (sw) {
    case 1:
        // do stuff;
        break;

    case 2:
        // do stuff;
        break;
        
    default:
        // do stuff;
}



