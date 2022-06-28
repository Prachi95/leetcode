// PROBLEM -> https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

// Time Complexity : O(n) => each node visited once and O(1) operation happening
// Space Complexity : O(height of tree) => i.e. callstack space

var sortedArrayToBST = function(nums) {
    return func(nums, 0, nums.length-1)
};

let func = (arr, left, right) => {
    if(left>right) return null
    
    let mid = parseInt((left+right)/2)
    let root = new TreeNode(arr[mid], null, null)
    root.left = func(arr, left, mid-1) 
    root.right = func(arr, mid+1, right)
    
    return root
}
