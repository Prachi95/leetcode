// PROBLEM -> https://leetcode.com/problems/linked-list-cycle/


var hasCycle = function(head) {
    return solFloydAlgo(head)
};

// Time Complexity : O(n)
// Space Complexity : O(n)
var solWithSet = function(head) {
    // create set
    let setOfNodeAddr = new Set()
    
    // traverse linked list
    if(!head) return false
    while(head != null) {
        
        // check if current node address already seen
        if(setOfNodeAddr.has(head)) return true
        
        // store address of each node in set
        setOfNodeAddr.add(head)
        head = head.next
    }
    return false
}

// Time Complexity : O(n)
// Space Complexity : O(1)
var solFloydAlgo = function(head) {
    
    if(!head) return false
    
    // create 2 pointers
    let kasav = head
    let sasa = head
    
    while(sasa != null && sasa.next != null) {
        kasav = kasav.next
        sasa = sasa.next.next
        
        if(sasa === kasav) return true
    }
    return false
}
