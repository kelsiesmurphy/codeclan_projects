const myForEach = function(array, callback) {
    for (element of array) {
        callback(element);
    }
}
const numbers = [1, 2, 3, 4];

const myCallBack = (element) => {
    console.log(`My element was ${element}`);
}

myForEach(numbers, myCallBack)

numbers.forEach(myCallBack)