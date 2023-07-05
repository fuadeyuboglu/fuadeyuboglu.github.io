/* 
    Adding an image changer
*/
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/delorean.jpg") {
        myImage.setAttribute("src", "images/delorean2.jpg");
    } else {
        myImage.setAttribute("src", "images/delorean.jpg");
    }
};


/* 
    Adding a personalized welcome message 
*/
// References to the new button and the heading
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// A function to set the personalized greeting
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Delorean: the time machine!, ${myName}`;
    }
}

// Initialization code
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Delorean: the time machine!, ${storedName}`;
}

// onclick event handler on the button
myButton.onclick = () => {
    setUserName();
};