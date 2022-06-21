// PROBLEM -> https://leetcode.com/problems/remove-duplicates-from-sorted-array

// Time Complexity : O(n)
// Space Complexity : O(1)
var removeDuplicates = function(nums) {
    let i = 0
    for(let j=1; j<nums.length; j++) {
        if(nums[i] !== nums[j]) {
            nums[i+1] = nums[j]
            i+=1
        }
    }
    return i+1
}

