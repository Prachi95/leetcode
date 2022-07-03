// PROBLEM -> https://leetcode.com/problems/palindrome-number/


// Time Complexity : O(digits) 
// Space Complexity : O(1)

var isPalindrome = function(x) {
    if(x<0) return false
    
    let originalNum = x
    let reversedNum = 0
    
    while(x > 0) {
        let digit = x%10
        reversedNum = reversedNum*10 + digit
        x = parseInt(x/10)
    }
    
    return reversedNum === originalNum
};
