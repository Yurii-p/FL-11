let range = 8;
let prize = 0;
let maxPrize = 100;
let attempt = 3;
let randomNumber;
let nextTry;
let guessNumber;
const magicNumber1 = 1;
const magicNumber2 = 2;
const magicNumber3 = 3;
const magicNumber4 = 4;
const magicNumber8 = 8;
const magicNumber100 = 100;

let play = confirm('Do you want to play a game?');
if (play === false) {
     alert('You did not become a billionaire, but can.');
} else {
    randomNumber = Math.floor(Math.random() * range) + magicNumber1;
    for (attempt = magicNumber3; attempt > 0; attempt--) {
        guessNumber = +prompt('Choose a roulette pocket number from 0 to ' + range +
            '\nAttempts left: ' + attempt + '\nTotal prize: ' + prize + '$ \nPossible prize in current attempt: ' +
            maxPrize + '$');
        if (guessNumber === randomNumber) {
            prize += maxPrize;
            attempt = magicNumber4;
            maxPrize = magicNumber100;
            nextTry = confirm('Congratulation, you won!   Your prize is: ' + prize + '$.\nDo you want to continue?')
            if (nextTry === true) {
                range *= magicNumber2;
                randomNumber = Math.floor(Math.random() * range) + magicNumber1;
            } else {
                break
            }
        } else {
            maxPrize /= magicNumber2;
        }
    }   
}
nextTry = confirm('Thank you for your participation. Your prize is: ' + prize + '\nDo you want to play again?')
    if (nextTry === true) {
        prize = 0;
        maxPrize = magicNumber100;
        range = magicNumber8;
        randomNumber = Math.floor(Math.random() * range) + magicNumber1;
        for (attempt = magicNumber3; attempt > 0; attempt--) {
            guessNumber = +prompt('Choose a roulette pocket number from 0 to ' + range +
                '\nAttempts left: ' + attempt + '\nTotal prize: ' + prize + '$ \nPossible prize in current attempt: ' +
                maxPrize + '$');
            if (guessNumber === randomNumber) {
                prize += maxPrize;
                attempt = magicNumber4;
                maxPrize = magicNumber100;
                nextTry = confirm('Congratulation, you won!   Your prize is: ' + prize + '$.\n');
                if (nextTry === true) {
                    range *= magicNumber2;
                    randomNumber = Math.floor(Math.random() * range) + magicNumber1;
                    console.log(randomNumber);
                } else {
                    alert('Thank you for your participation. Your prize is: ' + prize);
                }
            } else {
                maxPrize /= magicNumber2;
                
            }
        }
    } else {
        alert('You did not become a billionaire, but can.');
    }