const sum = (a: string, b: string):number | string => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if(isNaN(numA) || isNaN(numB)){
        return "ko hợp lệ";
    }
    return numA + numB;
}
console.log(sum("8", "4"));

const subtract = (a: string, b: string):number | string => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if(isNaN(numA) || isNaN(numB)){
        return "tham sô ko hợp lệ";
    }
    return numA - numB;
}
console.log(subtract("8", "4"));

const multiply = (a: string, b: string):number | string => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if(isNaN(numA) || isNaN(numB)){
        return "ko hợp lệ";
    }
    return numA * numB;
}
console.log(multiply("8", "4"));

const divide = (a: string, b: string):number | string => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if(isNaN(numA) || isNaN(numB)){
        return "tham sô ko hợp lệ";
    }
    return numA / numB;
}
console.log(divide("8", "4"));
