var sum = function (a, b) {
    var numA = parseFloat(a);
    var numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
        return "ko hợp lệ";
    }
    return numA + numB;
};
console.log(sum("8", "4"));
var subtract = function (a, b) {
    var numA = parseFloat(a);
    var numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
        return "ko hợp lệ";
    }
    return numA - numB;
};
console.log(subtract("8", "4"));
var multiply = function (a, b) {
    var numA = parseFloat(a);
    var numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
        return "ko hợp lệ";
    }
    return numA * numB;
};
console.log(multiply("8", "4"));
var divide = function (a, b) {
    var numA = parseFloat(a);
    var numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
        return "tham sô ko hợp lệ";
    }
    return numA / numB;
};
console.log(divide("8", "4"));
