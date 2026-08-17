const leapYears = function(value) {

    let leap = false

    if (value%4 == 0) {
        if (value%100 == 0 && value%400 == 0) {
            leap = true
        } else if (value % 100 != 0) {
            leap = true
        }
        return leap
    } else {
        return leap
    }
    

};

// Do not edit below this line
module.exports = leapYears;
