const removeFromArray = function(arr, firstElement,...otherElements) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (firstElement === arr[i] || otherElements.includes(arr[i])) {
            arr.splice(i, 1);
        }
    }

    return arr;
};

let arr = [1,2,3,4]
console.log(removeFromArray(arr, 3));

// Do not edit below this line
module.exports = removeFromArray;
