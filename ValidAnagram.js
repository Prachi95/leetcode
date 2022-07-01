//PROBLEM -> https://leetcode.com/problems/valid-anagram/

// Time Complexity -> O(n)
// Space Complexity -> O(n)

var isAnagram = function(s, t) {
    //base case, check if 2 strings have same length, else return 
    if(s.length != t.length) return false
    
    //map for [char:occurence] 
    let sMap = new Map()
    let tMap = new Map()
    
    for(let c of s) {
        if(sMap.has(c)) {
            let count = sMap.get(c) + 1
            sMap.set(c, count)
        } else {
            sMap.set(c, 1)
        }
    }
    
    for(let c of t) {
        if(tMap.has(c)) {
            let count = tMap.get(c) + 1
            tMap.set(c, count)
        } else {
            tMap.set(c, 1)
        }
    }
    
    //check if both has same char length
    return compare(sMap, tMap)
};

const compare = (map1, map2) => {
    if(map1.length !== map2.length) return false
    else {
        let result = true
        map1.forEach((val, key) => {
            if(!map2.has(key) || map2.get(key) !== val) {
                result = false
            } 
        })
        return result
    }
}
