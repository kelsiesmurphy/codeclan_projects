// Higher Order Components

// const myNumbers = [1, 2, 3, 4];

// for (const number of myNumbers) {
//     console.log(`Number was: ${number}`);
// }

// myNumbers.forEach((number) => {
//     console.log(`Number was: ${number}`);
// })

// const myNumberFunction = (number) => {
//     console.log(`Number was: ${number}`);
// }

// myNumbers.forEach(myNumberFunction);


// myNumbers.forEach((number, index) => {
//     console.log(`Next number was: ${number} at index: ${index}`);
// });

// const myNumberFunction = (number, index) => {
//     console.log(`Next number was: ${number} at index: ${index}`);
// }

// myNumbers.forEach(myNumberFunction);


// const multipliedByTwo = function (numbers) {
//     const multipliedNums = [];

//     numbers.forEach((number) => {
//         const multipliedNum = number * 2;
//         multipliedNums.push(multipliedNum);
//     })
    
//     return multipliedNums;
// }

// console.log('Numbers before multiplication: ', myNumbers);
// console.log('Numbers after multiplication: ', multipliedByTwo(myNumbers));


// Write a function called 'getEvens' that accepts an array of numbers and returns a new array of numbers with just the even numbers from the array

numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const getEvens = function (numbers) {
    const evenNumbers = [];

    numbers.forEach((number) => {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    });

    return evenNumbers;
}

console.log('Even numbers: ', getEvens(numbersArray));