// Check node version with node -v in the terminal

// console.log('Hello World!');

var myName = 'Joe';
// console.log('Hello:', myName);

myName = 34;
// console.log(myName);

// Numbers can be with decimal or without
var myNumber1 = 34;
var myNumber2 = -34.999;
// console.log(typeof myNumber1);
// console.log(typeof myNumber2);

var mySum = myNumber1 - myNumber2;
// console.log(mySum);

// String
var myString1 = 'Single quote string';
var myString2 = "Double quote string";
var myString3 = `Backtick string is like ${myString2} but allows injection`;
var myString4 = myString1 + myString2;
// console.log(typeof myString1);

/* This is a multiline comment
see? still a comment

Semicolons are not necessarily required, as Javascript has automatic semicolon insertion, but it is best practice as it does not always perform the expected way. */

// Use node to enter the repl like using python3

/* Null for explicitly saying something is deliberately empty. This is similar but different from 'undefined', which is when something is accidentally empty. */
var myNullVar = null;
// console.log(myNullVar, typeof myNullVar);

var myUndefined = undefined;

var myNaN = 9 - 'string value';
// console.log(myNaN);

// Booleans
var myTrue = true;
var myFalse = false;


// If else block
if (5 > 2) {
    // console.log('5 is greater than 2');
} else if (1 == 0) {
    // console.log('1 if equal to 0');
} else {
    // console.log('something else');
}


var myVar;

if (myVar) {
    // console.log('variable has a value');
} else {
    // console.log('variable does not have a value');
}


/* 
Equality
== is loose equality, meaning 3 == '3' would return true
=== is strong equality, meaning 3 === '3' would return false

Logical Operators
&& means 'and' from python
|| means 'or' from python
*/
if ((1 + 1 === 2) || (2 + 2 === 2)) {
    // console.log('was true');
}


// List
var myArray = [];
var sports = ['Football', 'Tennis', 'Rugby', 'Lacrosse'];

// console.log(sports);
// console.log(sports.length);
// console.log(sports[0]);

sports.push('Basketball', 'Badminton');
// console.log(sports);

sports.pop();
// Add a list item to start of array
sports.unshift('Hockey');
// Remove first item of array and returns it
sports.shift();
// console.log(sports);

// Splice
// var removedElements = sports.splice(1, 3);
// console.log(removedElements);
// console.log(sports);

// Loops using 'for _ of'
for (var currentSport of sports) {
    // console.log(currentSport.toUpperCase());
}

// This for loop is similar to a python while loop with an index counter. The index is set to 0, and whilst index is less than the sports.length, increment index('i')
for (var i = 0; i < sports.length; i++) {
    // console.log('counter was: ', i, ', sport was', sports[i]);
}



// Objects
var movie = {
    title: "It's A Wonderful Life",
    year: 1946,
    language: 'Spanish'
}
movie.cast = ['James Stewart', 'Donna Reed'];
movie['subtitle-language'] = 'French';
var keyName = 'cast';
// console.log(movie[keyName]);

// Delete a property of an object
delete movie['subtitle-language'];

// Add an object inside an object
movie.ratings = {
    critic: 94,
    audience: 95
}
// console.log(movie.ratings.critic);


// Loop over an object using 'for _ in'
for (var key in movie) {
    console.log('Key was: ', key, 'value was:', movie[key])
    console.log(`Key was ${key}, value was ${movie[key]}`)
}

var movieKeys = Object.keys(movie);
// console.log(movieKeys);