const parseInput = (value: string): number | null => {
    const num = parseFloat(value);
    return isNaN(num) ? null : num
}

const sum = (a: number, b: number): number => {
    return a + b;
}

const subtract = (a: number, b: number): number => {
    return a - b;
}

const multiply = (a: number, b: number): number => {
    return a * b;
}

const divide = (a: number, b: number):number => {
    return a / b;
}

const power = (base: number, exponent: number): number => {
    return Math.pow(base, exponent);
}

const sqrt = (base: number, root: number): number => {
    return Math.pow(base, 1 / root);
}

const factorial = (n: number): number | string => {
    if (n < 0 || n % 1 !== 0) {
        return "tính giai thừa";
    }
    let result = 1;
    for(let i = 2; i <= n; i++){
        result *= i;
    }
    return result;
}

const calculate = (operation: string): void => {
    const input1 = (document.getElementById('input1') as HTMLInputElement).value;
    const input2 = (document.getElementById('input2') as HTMLInputElement).value;
    const resultSpan = document.getElementById('result')!;

    const num1 = parseInput(input1);
    const num2 = parseInput(input2);

    if(operation === '!'){
        if(num1 === null){
            resultSpan.textContent = "dữ liệu ko hợp lệ";
            return;
        }
        resultSpan.textContent = factorial(num1).toString();
        return;
    }

    if(num1 === null || num2 === null){
        resultSpan.textContent = "dữ liệu ko hơp lệ";
        return;
    }
    let result: number;
    if(operation === '+'){
        result = sum(num1, num2);
    } else if (operation === '-'){
        result = subtract(num1, num2);
    } else if( operation === '*'){
        result = multiply(num1, num2);
    } else if (operation === '/'){
        result = divide(num1, num2);
    } else if (operation === '^'){
        result = power(num1, num2);
    } else if (operation === '√'){
        result = sqrt(num1, num2);
    } else {
        resultSpan.textContent = "phép toán ko hợp lệ";
        return; 
    }
    resultSpan.textContent = result.toString();
}
document.getElementById('sum')?.addEventListener('click', function () {
    calculate('+');
});
document.getElementById('subtract')?.addEventListener('click', function () {
    calculate('-');
});
document.getElementById('multiplly')?.addEventListener('click', function () {
    calculate('*');
});
document.getElementById('divide')?.addEventListener('click', function () {
    calculate('/');
});
document.getElementById('power')?.addEventListener('click', function () {
    calculate('^');
});
document.getElementById('sqrt')?.addEventListener('click', function () {
    calculate('√');
});
document.getElementById('factorial')?.addEventListener('click', function () {
    calculate('!');
});
