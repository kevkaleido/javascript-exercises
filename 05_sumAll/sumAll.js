const sumAll = function(a, b) {
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    
    if (start < 0 || end < 0){
        return 'ERROR';
    }   else if (typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    }
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}

// Do not edit below this line
module.exports = sumAll;
