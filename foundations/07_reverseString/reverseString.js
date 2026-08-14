const reverseString = function(input) {

    let array = []

    for (let i=0 ; i<input.length; i++) {
        array.push(input[i])
    }

    array.sort(() => -1)

    return array.join("");
};

// Do not edit below this line
module.exports = reverseString;
