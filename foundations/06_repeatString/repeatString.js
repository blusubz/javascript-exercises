const repeatString = function(str, num) {
    let newStr = "";
    let newArr = [];

    if (num < 0) {
        return `ERROR`;
    } else {
        for (let i = 0; i < num; i++) {
            newArr.push(str);
        }
        return newStr = newArr.join("");
    }
};

// console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
