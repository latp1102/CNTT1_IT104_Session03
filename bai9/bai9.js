var _a, _b, _c, _d, _e, _f, _g;
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
    if (operation === '!') {
        if (num1 === null) {
            resultSpan.textContent = "dữ liệu ko hợp lệ";
            return;
        }
        resultSpan.textContent = factorial(num1).toString();
        return;
    }
    if (num1 === null || num2 === null) {
        resultSpan.textContent = "dữ liệu ko hơp lệ";
        return;
    }
    var result;
    if (operation === '+') {
        result = sum(num1, num2);
    }
    else if (operation === '-') {
        result = subtract(num1, num2);
    }
    else if (operation === '*') {
        result = multiply(num1, num2);
    }
    else if (operation === '/') {
        result = divide(num1, num2);
    }
    else if (operation === '^') {
        result = power(num1, num2);
    }
    else if (operation === '√') {
        result = sqrt(num1, num2);
    }
    else {
        resultSpan.textContent = "phép toán ko hợp lệ";
        return;
    }
    resultSpan.textContent = result.toString();
};
(_a = document.getElementById('sum')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    calculate('+');
});
(_b = document.getElementById('subtract')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    calculate('-');
});
(_c = document.getElementById('multiplly')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    calculate('*');
});
(_d = document.getElementById('divide')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    calculate('/');
});
(_e = document.getElementById('power')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () {
    calculate('^');
});
(_f = document.getElementById('sqrt')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () {
    calculate('√');
});
(_g = document.getElementById('factorial')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', function () {
    calculate('!');
});
