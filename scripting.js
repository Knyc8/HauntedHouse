const infotxt = document.getElementById('infotext');
const info = document.getElementById('info');
const closeInfo = document.getElementById('closeInfo');
var clicked = false;

if (info) {
    info.addEventListener('click', () => {
        console.log(clicked);
    
        infotxt.style.display = "flex";
        infotxt.style.flexDirection = "column";
        clicked = true;
    })
}

if (closeInfo) {
    closeInfo.addEventListener('click', () => {
        console.log(clicked);
    
        infotxt.style.display = "none";
        clicked = false;
    })
}

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

function piano(room) {
    console.log("Sound");
    // if (room == "menu") {
    //     var pianoSong = new Audio('res/sfx/Angst.mp3');
    //     pianoSong.play();
    //     pianoSong.loop = true;
    //     pianoSong.volume = 0.35;
    //     pianoSong.currentTime += 1;
    // }
    if (room == "gpr")
    {
        var pianoSong = new Audio('../../../res/sfx/BadEncounter.mp3');
        pianoSong.play();
        pianoSong.loop = true;
        pianoSong.volume = 1;
    }
    if (room == "hall")
    {
        var pianoSong = new Audio('../../res/sfx/BadEncounter.mp3');
        pianoSong.play();
        pianoSong.loop = true;
        pianoSong.volume = 0.2;
    }
}

function playAmb(room) {
    console.log("Sound");
    if (room == "kit") {
        var ambience = new Audio('../../../res/sfx/kitchensfx.mp3');
        ambience.play();
        ambience.loop = true;
        ambience.volume = 2;
        ambience.currentTime += 1;
    }
    if (room == "hall") {
        var ambience = new Audio('../../res/sfx/hallsfx.mp3');
        ambience.play();
        ambience.loop = true;
        ambience.volume = 0.2;
    }
    if (room == "dine") {
        var ambience = new Audio('../../../res/sfx/whispering.mp3');
        ambience.play();
        ambience.loop = true;
        ambience.volume = 0.3;
    }
    if (room == "lib") {
        var ambience = new Audio('../../../res/sfx/clock.mp3');
        ambience.play();
        ambience.loop = true;
        ambience.volume = 1;
    }
    if (room == "living") {
        var ambience = new Audio('../res/sfx/livingsfx.mp3');
        ambience.play();
        ambience.loop = true;
        ambience.volume = 0.15;
    }
}

const door = document.getElementById('code');

if (door) {
    door.addEventListener('click', () => {
        console.log("Clicked")
        let result = prompt("What is the 4-digit code?:");
    
        if (result == "5581") {
            //redirect
        }
        else {
            alert("Incorrect Code.");
        }
    });
}