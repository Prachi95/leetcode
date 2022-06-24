// PROBLEM -> https://leetcode.com/problems/binary-tree-inorder-traversal

// Time Complexity : O(n) -> Since each node is processed in O(1) time
// Space Complexity : O(log(n)) -> Not considering ans array, this is size of recursion call stack

var inorderTraversal = function(root) {
    let ans = []
    
    if(root) {
        inorder(root, ans)
    }
    
    return ans
};

function inorder(node, ans) {
    if(node.left) {
        inorder(node.left, ans)
    }
    
    ans.push(node.val)
    
    if(node.right) {
        inorder(node.right, ans)
    }  
}

function inorder2(node, ans) {
    
    if (!node) return // base condition to stop recursion
    
    inorder2(node.left, ans)
    ans.push(node.val)
    inorder2(node.right, ans)
}
