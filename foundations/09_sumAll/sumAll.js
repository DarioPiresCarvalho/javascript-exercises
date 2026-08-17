const sumAll = function(a,b) {

    let range = 0
    let adding_value = 0
    let is_possible = true;
    
    if (b>a) {
        range = b - a;
        adding_value = a

    } else if (a>b) {
        range = a - b;
        adding_value = b;
    }

    let sum = 0;
    

    if (b/a == false  || a/b == false || a < 0 || b < 0 || a%1 != 0 || b%1!=0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    } else {
        for (let i = 0  ; i <= range ; i++) {
            sum += adding_value++
        }
        return sum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
