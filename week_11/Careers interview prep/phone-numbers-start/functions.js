function createPhoneNumber(numbers) {
    // numbers = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`

    template = ["(", "replace", "replace", "replace", ")", " ", "replace", "replace", "replace", "-", "replace", "replace", "replace", "replace"]
    
    newNumbers = template.map((digit, index)=> {
        if(digit === "replace") {
            return numbers.slice(index, 1).join("")
        } else {
            return digit
        }
    })
    numbers = newNumbers.join("")
    return numbers;
}

module.exports = createPhoneNumber;