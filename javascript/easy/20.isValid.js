/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    /**
     * 题目：
     * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
     * 有效字符串需满足：
     *  1.左括号必须用相同类型的右括号闭合。
     *  2.左括号必须以正确的顺序闭合。
     * 注意空字符串可被认为是有效字符串。
     * 
     * 直接使用符号栈，'(','{','[' 进栈
     * 另一边出栈
     */
    let symbolStack = [];
    let symbolInTopStack;
    for(let index = 0; index < s.length; index++){
        switch(s[index]){
            case '(':
                symbolStack.push(s[index]);
                break;
            case '{':
                symbolStack.push(s[index]);
                break;
            case '[':
                symbolStack.push(s[index]);
                break;
            case ')':
                symbolInTopStack = symbolStack.pop();
                if(symbolInTopStack != '('){
                    return false;
                }
                break;
            case ']':
                symbolInTopStack = symbolStack.pop();
                if(symbolInTopStack != '['){
                    return false;
                }
                break;
            case '}':
                symbolInTopStack = symbolStack.pop();
                if(symbolInTopStack != '{'){
                    return false;
                }
                break;
            default: 
                break;
        }
    }

    if(symbolStack.length > 0){
        return false;
    }

    return true;
};

module.exports = isValid;