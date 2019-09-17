

// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num = 0;
    for(let index = 0; index < s.length; index++){
        let next;
        switch (s[index]) {
            case "M":
                num = num + 1000;
                break;
            case "D":
                num = num + 500;
                break;
            case "C":
                // 有回溯的特殊情况
                // C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900
                next = s[index + 1];
                if (next && next == "D") {
                    num += 400;
                    index++;
                } else if (next && next == "M") {
                    num += 900;
                    index++;
                } else {
                    num += 100;
                }
                break;
            case "L":
                num = num + 50;
                break;
            case "X":
                // 有不同情况 
                // X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
                next = s[index + 1];
                if (next && next == "L") {
                    num += 40;
                    index++;
                } else if (next && next == "C") {
                    num += 90;
                    index++;
                } else {
                    num += 10;
                }
                break;
            case "V":
                num = num + 5;
                break;
            case "I":
                // 有不同情况
                // I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
                next = s[index + 1];
                if(next && next == "V"){
                    num += 4;
                    index++;
                } else if (next && next == "X") {
                    num += 9;
                    index++;
                } else {
                    num += 1;
                }
                break;
            default:
                break;

        }
    }

    return num;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));