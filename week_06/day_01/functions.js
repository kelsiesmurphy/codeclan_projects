// Function Declaration
function sayHello(greetingName='World') {
    return `Hello ${greetingName}!`;
}

var value = sayHello();
console.log(value);

// Function Expression (in this case, anonymous as it has no name after function)
var add = function (firstNum, secondNum) {
    return firstNum + secondNum;
}

console.log(add(1, 2));