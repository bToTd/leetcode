/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // 题目
    // 编写一个函数来查找字符串数组中的最长公共前缀。
    // 如果不存在公共前缀，返回空字符串 ""
    /**
     * 1. 字符串数组为空，直接返回 null
     * 2. 只有一个字符串，直接返回这个字符串
     * 3. 多个字符串
     *     用第一个字符串作为参考去对比每个字符串对应的 index 位置的字符
     */
    if(strs.length === 0){
        return "";
    }

    if(strs.length === 1){
        return strs[0];
    }
    let res = ''
    for(let i = 0; i < strs[0].length; i++){
        for(let j = 1; j < strs.length; j++){
            if(strs[0][i] != strs[j][i]){
                return res;
            }
        }
        res += strs[0][i];
    }
    return res;
};

module.exports = longestCommonPrefix;
