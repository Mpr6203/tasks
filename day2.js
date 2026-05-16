(function () {
    console.log("Welcome to the game");
})();


// TDZ Example
// console.log(secretNum);

function outer() {

    let secretNum = Math.floor(Math.random() * 10) + 1;

    return () => secretNum; // closure + arrow function
}

const secret = outer();


// Hoisting Example
// takeInput() is used before declaration

for (let i = 1; i <= 3; i++) {

    let userGuess = takeInput(i);

    let result = checkGuess(userGuess, secret());

    if (result) {
        console.log("Game over! You won!");
        break;
    }

    if (i === 3) {
        console.log("Better luck next time!");
    }
}


// Normal function
function checkGuess(userGuess, secretNum) {

    if (userGuess === secretNum) {
        console.log("Correct!");
        return true;

    } else if (userGuess < secretNum) {
        console.log("Too low!");

    } else if (userGuess > secretNum) {
        console.log("Too high!");

    } else {
        console.log("Enter valid number only");
    }

    return false;
}


function takeInput(attempt) {

    return Number(
        prompt(`Attempt ${attempt}: Guess the secret number (1-10)`)
    );
}