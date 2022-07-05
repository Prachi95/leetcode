// PROBLEM -> https://leetcode.com/problems/word-search/

// Time Complexity : O(mnw) -> m=rows, n=cols, w=word
// Space Complexity : O(mn + w) -> visited + recursion

var exist = function(board, word) {
    
    let R = board.length
    let C = board[0].length
    
    // look for word starting from each cell
    for(let r=0;r<R;r++) {
        for(let c=0;c<C;c++) {
            let visited = initVisited(R,C)
            if(exists(board, word, r, c, 0, visited)) {
                return true
            }
        }
    }
    
    return false
};


// looks for remaining word match
var exists = (board, word, r, c, i, visited) => {
    
    if(i == word.length) return true //all characters are already match
    
    if(!isValid(board, r, c)) return false //cell does not exist to match
    
    if(word[i] !== board[r][c]) return false //character doesnt match, dont go further
    
    if(visited[r][c]) return false //already visited
    
    visited[r][c] = true //since its a match
    
    //looking in all 4 directions for remaining character match
    if (exists(board, word, r, c+1, i+1, visited) || //right
      exists(board, word, r, c-1, i+1, visited) || //left
      exists(board, word, r-1, c, i+1, visited) || //top
      exists(board, word, r+1, c, i+1, visited)){ // bottom
        return true
    } else {
        // since not getting char match in any 4 directions, make this visited also false
        visited[r][c] = false
        return false
    }
    
}

var isValid = (board, r, c) => {
    let R = board.length
    let C = board[0].length
    
    return r>=0 && r<R && c>=0 && c<C
}

var initVisited = (R, C) => {
    let arr = []
    for (let i = 0; i< R; i++) {
        arr[i] = []
    }
    for (let i = 0; i< R; i++) {
        for (let j = 0; j< C; j++)
        arr[i].push(false)
    }
    
    return arr

}
