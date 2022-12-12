// 1. Declare a named function that takes an array of numbers as an argument and returns the sum (total) of all the numbers in the array
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function totalNum(listOfNums) {
    var total = 0
    for (var number of listOfNums) {
        total += number
    }
    return total
}
console.log(totalNum(numArray))


/* 2. Write an anonymous function expression that takes two arguments:
- an Object
- a String
and return true if the string is present as a key in the object otherwise false. */

var vehicle = {
    vehicleType: 'Car',
    brand: 'Volvo',
    wheelCount: 4
}

var stringItem = 'wheelCount';

var isStringPresent = function (obj, str) {
    for (var key in obj) {
        if (key === str) {
            return true;
        }
    }
    return false;
    
}
console.log(isStringPresent(vehicle, stringItem));