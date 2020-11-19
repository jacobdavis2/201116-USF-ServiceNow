let imageLink = "https://th.bing.com/th/id/OIP.1g4lhmyXycCJ1ljSF9VuGwHaJs?w=200&h=262&c=7&o=5&pid=1.7";
            
function loadImage() {
    /*
        1. Get the img element
        2. Set img's src to imageLink
    */

    //let element = document.getElementById("image");
    let element = document.querySelector("#image");
    console.log(element);

    element.setAttribute("src", imageLink);
}

function create(event) {
    loadImage();

    let html = document.querySelector("html");
    let element = document.createElement("p");
    element.innerHTML = "Hi, I am a paragraph!";

    html.appendChild(element);

    console.log(event);
}

function htmlClick() {
    console.log("<html> clicked!");
}

function bodyClick() {
    console.log("<body> clicked!");
}

function buttonClick() {
    console.log("<button> clicked!");
}

let button = document.querySelector("#button");
button.addEventListener("mousedown", buttonClick, true);