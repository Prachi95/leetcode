// PROBLEM -> https://leetcode.com/problems/valid-palindrome/

// Time Complexity : O(n)
// Space Complexity : O(1)

var isPalindrome = function(s) {
    
    let first = 0
    let last = s.length-1
    
    while(first<last) {
        if(!isAlphaNumeric(s[first])) {
            first += 1
        } else if(!isAlphaNumeric(s[last])) {
            last -= 1
        } else {
            if(s[first].toLowerCase() !== s[last].toLowerCase()) {
                return false
            }
            first += 1
            last -= 1
        }
    }
  
    return true
};

const isAlphaNumeric = (c) => {
    if(c >= 'a' && c <= 'z') {
        return true
    } else if(c >= '0' && c <= '9') {
        return true
    } else if(c >= 'A' && c <= 'Z') {
        return true
    }
    return false
}
