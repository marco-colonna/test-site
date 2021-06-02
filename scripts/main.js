// Image switcher

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mint-leaves.jpg') {
        myImage.setAttribute('src','images/mint-flower.jpg');
    } else {
        myImage.setAttribute('src','images/mint-leaves.jpg');
    }
}

// Personalized welcome message

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Check out mint, ' + myName + '.';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Check out mint, ' + storedName + '.';
}

myButton.onclick = function() {
    setUserName();
}
