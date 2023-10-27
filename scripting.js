const info = document.getElementById('info');
// const infotxt = document.getElementById('infotext');

info.addEventListener('click', function() {
    console.log("true")
});

function initialize() {
    console.log(document.getElementById('info'))
}

function popup () {
    console.log("Clicked!")
    infotxt.style.display = none;
}

// Sounds
function scare () {
    console.log("Sound")
    var jumpscare = new Audio('res/pipes.mp3');
    jumpscare.play();
}