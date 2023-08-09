// Mark Klingelhoefer
// Credit card number validator
// Determines if a credit card number is valid or not and what company
// the card number would be or is associated with

// Allows program to get user input
const prompt = require("prompt-sync")();

// Examples of valid input
const valid1 = 4539677908016808;
const valid2 = 5535766768751439;
// Examples of invalid input
const invalid1 = 532778771091795;
const invalid2 = 5795593392134643;

// Takes a number and splits each number into an array
// Doing this makes it easier to iterate through each number
const splitIntoArray = num => {
    return Array.from(String(num), Number);
}

// Returns if card is valid or invalid. Determines if card is valid using 
// the Luhn algorithm.
const cardValidator = arr => {
    let cardSum = 0;
    // For each loop, i is 2 greater
    for (let i = 0; i < arr.length; i += 2) {
        // console.log("Current number is " + i)
        // If i * 2 > 9, subtract 9 from the sum and add to card sum
        if (((arr[i]) * 2) > 9) {
            // console.log("Doubled number is greater than 9")
            cardSum += ((arr[i]) * 2) - 9;
            // console.log(`Current card sum: ${cardSum}`)
        // Else add i * 2 to sum
        } else {
            // console.log("Doubled number is not greater than 9");
            cardSum += ((arr[i]) * 2);
            // console.log(`Current card sum: ${cardSum}`);
        }
        // console.log("Current number is " + (i + 1))
        // Add the next number to the card sum (you don't multiply this number
        // using the Luhn algorithm)
        cardSum += arr[(i + 1)];
        // console.log(`Current card sum: ${cardSum}`);
    }
    // If cardSum remainder 10 is 0, return true as it's a valid credit card.
    // If not, return false for invalid card.
    if (cardSum % 10 === 0) {
        return true;
    } else {
        return false;
    }
}

// Validates card and determines what company the card does or would belong to if it was real
const validatorProgram = card => {
    // Program stops if user enters 'q'
    while (card != 'q') {
        let arr = splitIntoArray(card);
        if (cardValidator(arr) === true) {
            console.log('Credit card number is valid');
            // Amex card if first number on card is 3
            if (arr[0] === 3) {
                console.log('Credit card is an Amex (American Express) card and it is valid.')
            // Visa card if first number on card is 4
            } else if (arr[0] === 4) {
                console.log('Credit card is a Visa card and it is valid.')
            // Mastercard if first number on card is 5
            } else if (arr[0] === 5) {
                console.log('Credit card is a Mastercard and it is valid.')
            // Discover card if first number on card is 6
            } else if (arr[0] === 6) {
                console.log('Credit card is a Discover card and it is valid.')
            } else {
                console.log('Credit card is valid but company was not found')
            }
        } else {
            console.log('Credit card number is invalid');
            if (arr[0] === 3) {
                console.log('Credit card is an Amex (American Express) card and it is invalid.')
            } else if (arr[0] === 4) {
                console.log('Credit card is a Visa card and it is invalid.')
            } else if (arr[0] === 5) {
                console.log('Credit card is a Mastercard and it is invalid.')
            } else if (arr[0] === 6) {
                console.log('Credit card is a Discover card and it is invalid.')
            } else {
                console.log('Credit card is invalid and company was not found')
            }
        };
        card = prompt('Please enter the credit card number (no dashes) or enter q to quit: ');
    }
}

// User inputs card number
let cardNumber = prompt('Please enter the credit card number (no dashes) or enter q to quit: ');
// Runs program
validatorProgram(cardNumber);