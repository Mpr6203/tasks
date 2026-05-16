console.log('welcome to the game');

let i = 1;

// console.log(secretNum) // temoporal dead zone, the variable is being accessed before declaration

let secretNum = Math.floor(Math.random() * 10) + 1;
console.log(secretNum)


for(let i = 1; i<=3; i++){

    let userGuess = takeInput(i) // example of hoisting, function defintion are used here and it works because function declarations are hoisted.

    let guessStatus = checkGuess(userGuess)

    if(guessStatus){
        console.log('game over! refresh to try again')
        break;
    }
    
}



function checkGuess(userGuess){

    let flag = false

    if (userGuess === secretNum) {
        console.log('correct');
        flag = true

    } else if (userGuess < secretNum) {
        console.log('too low');

    } else if (userGuess > secretNum) {
        console.log('too high');

    } else {
        console.log('enter valid number only');
    }

    return flag

}

function takeInput(attempt){

    let message = `Attempt ${attempt}: Guess the secret number (1-10)`;

    let userInput = Number(prompt(message));
    
    return userInput
    
}










