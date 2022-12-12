var secretsFunction = function () {
    var pinCode = [0,0,0,0];
    // console.log('pin code inside function: ', pinCode)
}

secretsFunction()
// console.log(pinCode)


// Let makes a variable 'block scoped', meaning it should only affect within the related curly braces.
var filterNamesByFirstLetter = function (names, letter) {
    var filteredNames = []
    for (let name of names) {
        if (name[0] === letter) {
            filteredNames.push(name);
        }
    }
    // console.log('Name is now: ', name) <- works with 'var', but not with 'let', due to scope.
    return filteredNames;
}

var students = ['Alice', 'Bob', 'Amy', 'Jane'];
var filteredStudents = filterNamesByFirstLetter(students, 'B');
// console.log(filteredStudents)



let isItFive = function (number) {
    let result = false;
    if (number === 5) {
        result = true;
    }
    return result;
}

console.log(isItFive(5))


// Summary

/* 
Do not use var as it is outdated, and is not block scoped.
Let is block scoped and used commonly, and can be changed, and initialised without a value.
Const is similar to let, is also block scoped, but it is immutable, ie cannot be changed, and must be initialised with a value, otherwise will throw an error.
*/