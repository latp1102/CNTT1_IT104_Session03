var parseInput = function (value) {
    var num = parseFloat(value);
    return isNaN(num) ? null : num;
};
var sum = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return a - b;
};
var multiply = function (a, b) {
    return a * b;
};
var divide = function (a, b) {
    return a / b;
};
var power = function (base, exponent) {
    return Math.pow(base, exponent);
};
var sqrt = function (base, root) {
    return Math.pow(base, 1 / root);
};
var factorial = function (n) {
    if (n < 0 || n % 1 !== 0) {
        return "tính giai thừa";
    }
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};
var calculate = function (operation) {
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var resultSpan = document.getElementById('result');
    var num1 = parseInput(input1);
    var num2 = parseInput(input2);
    var result = '';
    switch (operation) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '^':
        case '√':
            if (num1 === null || num2 === null) {
                result = "Dữ liệu không hợp lệ";
            }
            else {
                switch (operation) {
                    case '+':
                        result = sum(num1, num2);
                        break;
                    case '-':
                        result = subtract(num1, num2);
                        break;
                    case '*':
                        result = multiply(num1, num2);
                        break;
                    case '/':
                        result = divide(num1, num2);
                        break;
                    case '^':
                        result = power(num1, num2);
                        break;
                    case '√':
                        result = sqrt(num1, num2);
                        break;
                }
            }
            break;
        case '!':
            if (num1 === null) {
                result = "Dữ liệu không hợp lệ";
            }
            else {
                result = factorial(num1);
            }
            break;
        default:
            result = "Phép toán không hợp lệ";
    }
    resultSpan.textContent = result.toString();
};
