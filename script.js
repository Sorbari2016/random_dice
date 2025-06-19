// JAVASCRIPT CODE

// Create function to randomly select  player 1 images 
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


// Create a function to randomly select player 2 images
function randomRightImage() {
    // Generate a random number between 0 & 6
    const number = 6; 
    const randomIndex2 = Math.floor(Math.random() * number); 

    // Create a list for the images
    const rightIMage = ["./images/dice1.png","./images/dice2.png","./images/dice3.png",
        "./images/dice4.png","./images/dice5.png","./images/dice6.png"
     ];

    //  Create a random selection of the images
    return rightIMage[randomIndex2];
}


// Set the src attribute to the leftImage
// Select the image element
const player2Image = document.querySelector(".img2");

// Set its source attribute
player2Image.setAttribute("src", randomRightImage()); 
