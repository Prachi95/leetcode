// PROBLEM -> https://leetcode.com/problems/two-sum
  

// Time complexity = O(n)
// Space complexity = O(n)
var twoSum = function(nums, target) {
    
    // create a hashmap of num:index 
    let map = new Map()
    
    // iterate to find out pair 
    for(let i=0; i<nums.length; i++) {
        let remaining = target-nums[i]
        if(map.has(remaining)) {
            return [i,map.get(remaining)]
        } 
        map.set(nums[i], i)
    }
    return 0
}

// Time complexity = O(n^2)
// Space complexity = O(1)
var bruteForce = (nums, target) => {
    for(let i=0; i<nums.length-1; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if(nums[i]+nums[j] === target) {
                return [i,j]
            }
        }
    }
    return 0
}
