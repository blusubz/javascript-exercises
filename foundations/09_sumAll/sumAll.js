const sumAll = function(startNum, endNum) {
    // check if these are both ints
    if (isNaN(startNum) || isNaN(endNum)) {
        console.log("1")
        return 'ERROR';
    }
    
    if (startNum > endNum) {
        [startNum, endNum] = [endNum, startNum]
    } 

    if (startNum < 0 || endNum < 0) {
        return 'ERROR';
    }

    // skip left here
    if (!(Number.isInteger(startNum) && Number.isInteger(endNum))) {
        return 'ERROR';
    }

    // non-number param
    if (Array.isArray(startNum) || Array.isArray(endNum)) {
        console.log("array stub")
        return 'ERROR';
    }

    let sum = startNum;

    for (let i = startNum + 1; i <= endNum; ++i) {
        
        sum = sum + i;
    }

    // i am a remote web dev
    return sum;
};


let sum = sumAll(1, [1,2]);
// node it 
console.log(sumAll()); // returns the sum of 1 + 2 + 3 + 4 = 10

// Do not edit below this line
module.exports = sumAll;
