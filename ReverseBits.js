//PROBLEM -> https://leetcode.com/problems/reverse-bits/

// Time Complexity : O(1)
// Space Complexity: O(1)
var reverseBits = function(n) {
    
    let rev = 0
    for(let i=0;i<32;i++) {
        //left shift rev and add &result    
        rev *= 2
        rev = rev + (n & 1)
        
        //right shift n
        n = n >> 1
    }
    
    return rev    
};
