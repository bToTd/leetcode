/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        // 所有的负数都不是回文数
        return false;
    }
    let translation=0;
    let tem = x; // x 会动态改变，要备份输入的值，与转换后的值对比
    while(x!=0)
    {
        translation=translation*10+(x%10);
        x/=10;                  // js中没有区分整数和浮点数类型，这里除 10 会得到一个小数
        x = parseInt(x);        // 小数取整
        console.log(translation);
    }
    return tem == translation;
};

console.log(isPalindrome(121));

