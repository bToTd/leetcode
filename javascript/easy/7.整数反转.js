/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const int_max = 0x7fffffff;
    const int_min = -0x80000000;
    let anwser=0;
    while(x!=0)
    {
        anwser=anwser*10+(x%10);
        x/=10;                  // js中没有区分整数和浮点数类型，这里除 10 会得到一个小数
        x = parseInt(x);        // 小数取整
    }
    if(anwser<int_min || anwser>int_max)
    {
        anwser=0;
    }
    return anwser;
};

let test = reverse(123);
console.log(test);

