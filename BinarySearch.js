// PROBLEM -> https://leetcode.com/problems/binary-search/

// Time Complexity : O(logn)
// Space Complexity : O(1)
var search = function(nums, target) {
    let start = 0
    let end = nums.length-1
    
    while(start<=end) {
        let mid = parseInt((start+end)/2)
        if(target === nums[mid]) return mid
        if(target <= nums[mid]) {
            end = mid-1
        } else {
            start = mid+1
        }
    }
    return -1
};


// Time Complexity : O(logn)
// Space Complexity : O(logn) 
let binarySearch = (nums, start, end, target) => {
    let mid = parseInt((start+end)/2)
    if(target === nums[mid]) return mid
    if(start<end) {
        if(target <= nums[mid]) {
            return binarySearch(nums, start, mid-1, target)
        } else {
            return binarySearch(nums, mid+1, end, target)
        }   
    }
    return -1
}
