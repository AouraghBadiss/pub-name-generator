const words1 = ["Royal", "Fox", "Deer", "Fast", "Rose", "Dragon", "Hare", "Frog", "Slug"];
const words2 = ["Red", "Horse", "Dog", "Hound","Ship", "Goose", "Furious", "Lion", "Groom", "Lettuce", "Cat", "Bird"];
const rect1 = document.getElementById("rect1-list");
const rect2 = document.getElementById("rect2-list");
const button = document.getElementById("generateAName");
const loading = document.getElementById("loading");
const frameContainer = document.getElementById("frame-container");
const validateButton = document.getElementById("validateName");
const mainScreen = document.getElementById("main");
const finalScreen = document.getElementById("final-screen");
let finalPubName = "";
const pubName = document.getElementById("pub-name");
const comeBackHome = document.getElementById("come-back-home");

function generateItem(rectangle, txtRect) {
    const content = document.createElement("div");
    const txtContent = document.createTextNode(txtRect);
    content.appendChild(txtContent);
    rectangle.appendChild(content);
}

function generateList(pubNames, rectangle) {
    for(var i = 0 ; i < pubNames.length ; i++) {
        generateItem(rectangle, pubNames[i]);
    }
}

function generateAName() {
    const number1 = getRandomInt(words1.length);
    const number2 = getRandomInt(words2.length);
    finalPubName = words1[number1] + " & " + words2[number2]
    rect1.style.top = number1 * -100 + "px";
    rect2.style.top = number2 * -100 + "px";
    button.innerHTML= "Un autre nom ?";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function intro() {
    const duree = 3000;
    const transition = 1000;
    setTimeout(function() {
        loading.classList.add("hide");
    }, duree);
    setTimeout(function() {
        frameContainer.classList.add("show");
        loading.style.display = "none";
    }, duree + transition);
}

function displayValidateButton() {
    if(!validateButton.classList.contains("show")) {
        validateButton.classList.add("show");
        validateButton.style.cursor = "pointer";
    }
}

function showFinalScreen() {
    const duree = 1000;
    const transition = 1000;
    setTimeout(function() {
        mainScreen.classList.add("hide");
    }, duree);
    setTimeout(function() {
        mainScreen.style.display = "none";
        finalScreen.style.display = "block";
        finalScreen.classList.add("show");
        pubName.innerHTML = finalPubName;
    }, duree + transition);
}

function returnStart() {
    const duree = 1000;
    const transition = 1000;
    setTimeout(function() {
        finalScreen.classList.add("hide");
        finalScreen.classList.remove("show");
    }, duree);
    setTimeout(function() {
        finalScreen.style.display = "none";
        mainScreen.style.display = "block";
        mainScreen.classList.add("show");
        mainScreen.classList.remove("hide");
    }, duree + transition);
}

window.onload = function() {
    intro();
    generateList(words1, rect1);
    generateList(words2, rect2);
    button.addEventListener("click", function() {
        generateAName();
        displayValidateButton();
    });
    validateButton.addEventListener("click", showFinalScreen);
    comeBackHome.addEventListener("click", returnStart);
}


