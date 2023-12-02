// Importing Dimensions from react-native to get the window dimensions
import { Dimensions } from "react-native";

// Getting the height and width of the window
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

// Function to generate a random number within a specified range
export const getRandom = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Function to get the position and size for a pair of pipes
export const getPipeSizePosPair = (addToPositionX = 0) => {
    // Generating a random Y position for the top pipe
    let yPositionTop = -getRandom(220, windowHeight - 900)

    // Creating the top pipe object with position and size
    const pipeTop = { position: { x: windowWidth + addToPositionX, y: yPositionTop }, size: { height: 600, width: 55 } };
    
    // Creating the bottom pipe object with position and size
    const pipeBottom = { position: { x: windowWidth + addToPositionX, y: (windowHeight - 50) + yPositionTop }, size: { height: 100, width: 55 } }

    // Returning an object containing both pipes
    return { pipeTop, pipeBottom }
}


// // Function to check if the bird passed between pipes and update the score
// export const checkScore = (birdPosition: { x: any; y: number; }, pipeTop: { position: { x: any; }; size: { width: any; height: number; }; }, pipeBottom: any, score: number, setScore: (arg0: any) => void) => {
//     const birdX = birdPosition.x;
//     const pipeLeftX = pipeTop.position.x;
//     const pipeRightX = pipeTop.position.x + pipeTop.size.width;

//     // Check if the bird is between the pipes horizontally
//     if (birdX > pipeLeftX && birdX < pipeRightX) {
//         const pipeGapTop = pipeTop.size.height; // Gap between top and bottom pipes

//         // Check if the bird is between the pipes vertically
//         if (birdPosition.y > pipeTop.size.height && birdPosition.y < (windowHeight - pipeGapTop)) {
//             // Bird has passed between pipes, update the score
//             setScore(score + 1);
//         }
//     }
// }