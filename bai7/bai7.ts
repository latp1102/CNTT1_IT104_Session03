let str: string = "banana";
let result: string = "";
for (let i = 0; i < str.length; i++){
    const chart = str.charAt(i);
    if(!result.includes(chart)){
        result += chart;
    }

}
console.log(result);
