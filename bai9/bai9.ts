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

    let result: number | string = '';

    switch (operation) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '^':
        case '√':
            if (num1 === null || num2 === null) {
                result = "Dữ liệu không hợp lệ";
            } else {
                switch (operation) {
                    case '+': result = sum(num1, num2); break;
                    case '-': result = subtract(num1, num2); break;
                    case '*': result = multiply(num1, num2); break;
                    case '/': result = divide(num1, num2); break;
                    case '^': result = power(num1, num2); break;
                    case '√': result = sqrt(num1, num2); break;
                }
            }
            break;
        case '!':
            if (num1 === null) {
                result = "Dữ liệu không hợp lệ";
            } else {
                result = factorial(num1);
            }
            break;
        default:
            result = "Phép toán không hợp lệ";
    }

    resultSpan.textContent = result.toString();
}