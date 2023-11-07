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

// Testing
function launched() {
    console.log("Launched")
}

// Sounds
function scare () {
    console.log("Sound");
    var jumpscare = new Audio('res/sfx/pipes.mp3');
    jumpscare.play();
}

function scare2 () {
    console.log("Sound");
    var jumpscare = new Audio('res/sfx/fuzzy-jumpscare.mp3');
    jumpscare.play();
}

function scare3 () {
    console.log("Sound");
    var jumpscare = new Audio('res/sfx/jumpscare.mp3');
}

function piano() {
    console.log("Sound");
    var pianoSong = new Audio('../../../res/sfx/BadEncounter.mp3');
    pianoSong.play();
    pianoSong.loop = true;
}