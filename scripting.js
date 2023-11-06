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
    // jumpscare.play();
}


// // Clickable items
// document.getElementById('diningtable').addEventListener('click', () => {
//     console.log("true");
// })

//Testing
function launched() {
    console.log("Loaded");
    console.log(document.getElementById('diningtable'));
}

document.addEventListener('DOMContentLoaded', function () {
    // Attempt to get the diningtable element
    const diningTable = document.getElementById('diningtable');
    
    if (diningTable) {
        // If the diningtable element exists, add a click event listener
        diningTable.addEventListener('click', () => {
            console.log("true");
        });
    } else {
        console.error("Element with ID 'diningtable' not found.");
    }
});





