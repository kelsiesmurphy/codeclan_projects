// Function Declaration (Named Functions)
function sayHello(greetingName='World') {
    return `Hello ${greetingName}!`;
}

var value = sayHello();
// console.log(value);

// Function Expression (in this case, anonymous as it has no name after function)
var add = function (firstNum, secondNum) {
    return firstNum + secondNum;
}
// console.log(add(1, 2));



// Arrow Function
var addArrowFunc = (firstNum, secondNum) => {
    return firstNum + secondNum;
}

var result = addArrowFunc(1, 2);
// console.log(result)

// OR

var add = (num1, num2) => console.log(num1 + num2); 
add(1, 2);