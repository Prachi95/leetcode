// PROBLEM -> https://leetcode.com/problems/same-tree/


// Time Complexity : O(p+q) -> Nodes in both trees visited only once
// Space Complexity : O(log min(height of p, height of q))

var isSameTree = function(p, q) {

    //base condition
    if(!p && !q) return true
    
    if((p && !q) || (!p && q)) return false
    
    //check root
    if(p.val !== q.val) return false
    
    //check left subtree
    if(!isSameTree(p.left, q.left)) return false
    
    //check right subtree
    if(!isSameTree(p.right, q.right)) return false
    
    return true
};
