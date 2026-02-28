const reverseString = function(str) {
    let arr = [];
    let revArr = [];
    let revStr = "";

    for (let i = 0; i < str.length ; i++) {
        arr.push(str.charAt(i));
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }

    revStr = revArr.join('');

    // console.log(revStr);

    return revStr;
};

reverseString("Hello, World!");

// Do not edit below this line
module.exports = reverseString;
