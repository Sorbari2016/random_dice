// JAVASCRIPT CODE FOR THE GAME 

// Create function to randomly select images.

function randomImages() {
    // Generate a random number between 0 & 6
    const number = 6; 
    const randomIndex = Math.floor(Math.random() * number); 

    // Create a list for the images
    const playerImages = ["./images/dice1.png","./images/dice2.png","./images/dice3.png",
        "./images/dice4.png","./images/dice5.png","./images/dice6.png"
     ];

    //  Create a random selection of the images
    return playerImages[randomIndex]; 
}


// Set the src attribute for both players.
// Select the image element, & set the attribute
document.querySelector(".img1").setAttribute("src", randomImages()); 
document.querySelector(".img2").setAttribute("src", randomImages());


// Get the image the src attribute is displaying and save in a a reassignable variable 
let leftDispayImage = document.querySelector(".img1").getAttribute("src"); 
let rightDisplayImage = document.querySelector(".img2").getAttribute("src");

// Declare who won, or if is a tie. 
function whoWon() {
    const heading = document.querySelector("h1"); 

    if (leftDispayImage === rightDisplayImage) {
        heading.innerHTML = "It's Draw"; 
    } else if (leftDispayImage > rightDisplayImage) { 
        heading.innerHTML = "Player 1 Won"; 
    } else if (leftDispayImage < rightDisplayImage) {
        heading.innerHTML = "Player 2 Won !"; 
    } else {
        heading.innerHTML = "Refresh Me"; 
    }
}

whoWon(); 