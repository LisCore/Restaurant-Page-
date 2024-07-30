// import './styles/style.css';
// let homeContentAdded = false;
// let menuContentAdded = false;
// const content = document.querySelector("#content");
// const header = document.querySelector("header");
// let welcome = document.createElement("h1");
// welcome.innerText = "Welcome to Corey's Cafe";
// header.insertBefore(welcome, header.firstChild);

// const home = document.querySelector(".home");
// const menu = document.querySelector(".menu");
// // const about = document.querySelector(".about");


// home.addEventListener("click", createHome);
// menu.addEventListener("click", createMenu);
// // about.addEventListener("click", createAbout);

// function createHome() {
//     if (homeContentAdded) {
//         homeContentAdded = false;
//         removeContent();
//     }
//     if (!homeContentAdded) {
//         let homeContent = document.createElement("div");
//         homeContent.className = "home";
//         homeContent.textContent = "Welcome to La Ratatoullie we are proud and honored that you want to experience the delicious the wonderful flavors right in the heart of Paris. Now if you have not already heard about the rat in the room or have not read the infamous food critic Igo's now highest reviewed restaurant or simply new to Paris we do things a little unorthodox compared to other restaurants around the city and you will be surprised on what you can expect. We do not judge nor discriminate about who can cook because as the famous Gusteau once said Anyone can cook";

//         appendContent(homeContent);
//         homeContentAdded = true;
//     }
// }
// function createMenu() {
//     if (menuContentAdded) {
//         menuContentAdded = false;
//         removeContent();
//     }
//     if (!menuContentAdded) {
//         let menuContent = document.createElement("div");
//         menuContent.className = "menu";
//         menuContent.textContent = "art of Paris. Now if you have not already heard about the rat in the room or have not read the infamous food critic Igo's now highest reviewed restaurant or simply new to Paris we do things a little unorthodox compared to other restaurants around the city and you will be surprised on what you can expect. We do not judge nor discriminate about who can cook because as the famous Gusteau once said Anyone can cook";

//         appendContent(menuContent);
//         menuContentAdded = true;
//     }
// }

// function appendContent(homeContent) {
//     content.appendChild(homeContent);
// }
// function removeContent() {
//     while (content.firstChild) {
//         content.removeChild(content.firstChild);
//     }
// }
// // let menu

// console.log("testing testing");
import './styles/style.css';

const content = document.querySelector("#content");
const header = document.querySelector("header");
let welcome = document.createElement("h1");
welcome.innerText = "Welcome to Corey's Cafe";
header.insertBefore(welcome, header.firstChild);

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about");

home.addEventListener("click", createHome);
menu.addEventListener("click", createMenu);
about.addEventListener("click", createAbout);

document.addEventListener("DOMContentLoaded", () => {
    createHome();
});

function createHome() {
    clearContent();
    let homeContent = document.createElement("div");
    homeContent.className = "page-content";
    homeContent.textContent = "Welcome to La Ratatoullie we are proud and honored that you want to experience the delicious the wonderful flavors right in the heart of Paris. Now if you have not already heard about the rat in the room or have not read the infamous food critic Igo's now highest reviewed restaurant or simply new to Paris we do things a little unorthodox compared to other restaurants around the city and you will be surprised on what you can expect. We do not judge nor discriminate about who can cook because as the famous Gusteau once said Anyone can cook";

    appendContent(homeContent);
}

function createMenu() {
    clearContent();
    let menuContent = document.createElement("div");
    menuContent.className = "page-content";
    menuContent.textContent = "Here is our delicious menu.";

    appendContent(menuContent);
}

function createAbout() {
    clearContent();
    let aboutContent = document.createElement("div");
    aboutContent.className = "page-content";
    aboutContent.textContent = "Learn more about us.";

    appendContent(aboutContent);
}

function clearContent() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

function appendContent(newContent) {
    content.appendChild(newContent);
}
