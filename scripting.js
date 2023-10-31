// const info = document.getElementById('info');
// const start = document.getElementById('start');
const infotxt = document.getElementById('infotext');

function launched() {
    console.log("Loaded");
}

var clicked = false;

document.getElementById('info').addEventListener('click', () => {
    console.log("true");
    if (!clicked) {
    infotxt.style.display = "flex";
    clicked = true;
    }
    else {
        infotxt.style.display = "none";
        clicked = false;
    }
})

// function initialize() {
//     console.log(document.getElementById('info'))
// }

// function popup () {
//     console.log("Clicked!");
//     infotxt.style.display = none;
// }

// Sounds
function scare () {
    console.log("Sound");
    var jumpscare = new Audio('res/pipes.mp3');
    jumpscare.play();
}
