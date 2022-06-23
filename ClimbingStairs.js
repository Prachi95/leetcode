// PROBLEM -> https://leetcode.com/problems/climbing-stairs/

// Time Complexity : O(n)
// Space Complexity: O(n)
var climbStairs = function(n) {
    let dp = []
    dp[1] = 1
    dp[2] = 2
    for (let i=3;i<=n;i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};
