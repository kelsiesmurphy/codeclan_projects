numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const getEvens = function (numbers) {
//     const evenNumbers = [];

//     numbers.forEach((number) => {
//         if (number % 2 === 0) {
//             evenNumbers.push(number);
//         }
//     });

//     return evenNumbers;
// }

// console.log('Even numbers: ', getEvens(numbersArray));


const getEvens = function (arrayOfNums) {
    const evenNumbers = arrayOfNums.filter((number) => {
        return number % 2 === 0;
    });
    return evenNumbers
}
console.log('Even numbers: ', getEvens(numbersArray));





const getOdds = function (arrayOfNums) {
    const oddNumbers = arrayOfNums.filter((number) => {
        return number % 2 !== 0;
    });
    return oddNumbers;
}
console.log('Odd numbers: ', getOdds(numbersArray));
