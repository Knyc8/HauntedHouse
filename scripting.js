const infotxt = document.getElementById('infotext');
const info = document.getElementById('info');
const closeInfo = document.getElementById('closeInfo');
var clicked = false;

var portalOpened = true;

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

function changeText() {
    document.getElementById("attictxt").innerHTML = "Now that he is gone, you can go to the basement and escape.";
    scream();
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

function scare2() {
    console.log("Sound");
    var jumpscare2 = new Audio('/res/sfx/fuzzy-jumpscare.mp3');
    jumpscare2.play();
}

function scare3() {
    console.log("Sound");
    var jumpscare3 = new Audio('/res/sfx/jumpscare.mp3');
    jumpscare3.play();
}

function scream() {
    console.log("Sound");
    var scream = new Audio('/res/sfx/scream.mp3');
    scream.play();
}

function splat() {
    console.log("Sound");
    var scream = new Audio('/res/sfx/splat.mp3');
    splat.play();
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

function portalOpen() {
    console.log("Sound");
    var portal = new Audio('/res/sfx/portal.mp3');
    portal.play();
    portalOpened = true;
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
            window.location.href = "secret.html"
        }
        else {
            alert("Incorrect Code.");
        }
    });
}