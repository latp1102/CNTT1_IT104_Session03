var str = "banana";
var result = " ";
for (var i = 0; i < str.length; i++) {
    var chart = str[i];
    if (!result.includes(chart)) {
        result += chart;
    }
}
console.log(result);
