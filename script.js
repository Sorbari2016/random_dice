// JAVASCRIPT CODE

function randomLeftImage() {
    // Generate a random number between 0 & 6
    const number = 6; 
    const randomIndex1 = Math.floor(Math.random() * number); 

    // Create a list for the images
    const leftIMage = ["./images/dice1.png","./images/dice2.png","./images/dice3.png",
        "./images/dice4.png","./images/dice5.png","./images/dice6.png"
     ];

    //  Create a random selection of the images
    return leftIMage[randomIndex1]
}

// Set the src attribute to the leftImage
// Select the image element
const player1Image = document.querySelector(".img1");

// Set its source attribute
player1Image.setAttribute("src", randomLeftImage()); 




