// PROBLEM -> https://leetcode.com/problems/symmetric-tree/

var isSymmetric = function(root) {
    if(!root) return true
    return isMirror(root.left, root.right) 
};

// Time Complexity : O(n)
// Space Complexity : O(n)
var solutionWithQueue = (root) => {
    // create 2 queues LM and RM
    let LM = []
    let RM = []
    
    if(!root) return true
    
    // Append nodes and compare their vales
    LM.push(root.left)
    RM.push(root.right)
    
    // return if bothe queues are null
    while(LM.length != 0 && RM.length != 0) {
        
        let lmNode = LM.shift()
        let rmNode = RM.shift()
        
        if(!lmNode && !rmNode) { // both null
            continue
        }
        else if(!lmNode || !rmNode) { // one null
            return false
        }
        else if(lmNode.val !== rmNode.val) { //both not null
            return false
        }
        
        LM.push(lmNode.left)
        LM.push(lmNode.right)
        RM.push(rmNode.right)
        RM.push(rmNode.left)
    }
    
    return LM.length == 0 && RM.length == 0
}

// Time Complexity : O(n)
// Space Complexity : O(height of tree)
var isMirror = (leftNode, rightNode) => {
    if(!leftNode && !rightNode) {
        return true
    }
    if(!leftNode || !rightNode) {
        return false
    }
    if(leftNode.val !== rightNode.val) {
        return false
    }
    
    return isMirror(leftNode.left, rightNode.right) && 
        isMirror(leftNode.right, rightNode.left) 
    
}
