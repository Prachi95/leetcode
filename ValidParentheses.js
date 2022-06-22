// PROBLEM -> https://leetcode.com/problems/valid-parentheses/

// Time Complexity : O(n)
// Space Complexity : O(n)
var isValid = function(s) {
   let stack = []
   for(let c of s) {
       if(c === '(' || c === '{' || c === '[') {
           stack.push(c)
       }
       if(c === ')' && stack.pop() !== '(') {
          return false
       }
       if(c === '}' && stack.pop() !== '{') {
           return false
       }
        if(c === ']' && stack.pop() !== '[') {
           return false
       }
       
   }
   return (stack.length === 0)
};
