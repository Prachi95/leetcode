//PROBLEM -> https://leetcode.com/problems/longest-common-prefix/

// Time Complexity : O(n^2)
// Space Complexity : O(n)

var longestCommonPrefix = function(strs) {
    let k = minLength(strs)
    
    let prefix = ""
  
    for(let c=0;c<k;c++) {
        let ch = strs[0][c]
        for(let i=0;i<strs.length;i++) {
            if(strs[i][c] !== ch) {
                return prefix
            } 
        }
        prefix += ch 
    }
    
    return prefix
};


const minLength = (strs) => {
    let min = strs[0].length
    for(let i=1;i<strs.length;i++) {
        if(strs[i].length < min) {
            min = strs[i].length
        }
    }
    return min
}
