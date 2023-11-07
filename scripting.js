const infotxt = document.getElementById('infotext');

var clicked = false;

document.getElementById('info').addEventListener('click', () => {
    console.log(clicked);

    infotxt.style.display = "flex";
    infotxt.style.flexDirection = "column";
    clicked = true;
})

document.getElementById('closeInfo').addEventListener('click', () => {
    console.log(clicked);

    infotxt.style.display = "none";
    clicked = false;
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

function piano(room) {
    console.log("Sound");
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