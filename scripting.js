const infotxt = document.getElementById('infotext');

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

// Sounds
function scare () {
    console.log("Sound");
    var jumpscare = new Audio('res/pipes.mp3');
    jumpscare.play();
}

function scare2 () {
    console.log("Sound");
    var jumpscare = new Audio('res/fuzzy-jumpscare.mp3');
    jumpscare.play();
}

function scare3 () {
    console.log("Sound");
    var jumpscare = new Audio('res/jumpscare.mp3');
}