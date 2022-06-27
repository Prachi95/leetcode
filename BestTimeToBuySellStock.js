// PROBLEM -> https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Time Complexity : O(n)
// Space Complexity : O(1)
var maxProfit = function(prices) {
    
    let smallestBuyPrice = prices[0]
    let maxProfit = 0
    
    for(let i=1; i<prices.length; i++) {
        if(prices[i] < smallestBuyPrice) {
            smallestBuyPrice = prices[i]
        } else {
            maxProfit = Math.max(prices[i] - smallestBuyPrice, maxProfit)
        }
    }
    
    return maxProfit
};
