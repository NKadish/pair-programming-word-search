const transpose = function(matrix) {
    // Put your solution here
    for (let i = 0; i < matrix.length; i++) {
      for ( let j = 0; j < i; j++) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
    return matrix;
  };

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    let verticalJoin = transpose(letters);
    console.log(horizontalJoin);
    verticalJoin = verticalJoin.map(ls => ls.join(''));
    console.log(verticalJoin);
    let resultHolder = false;
    for (const l of horizontalJoin) {
        if (l.includes(word)) {
            resultHolder = true;
            return resultHolder;
        }
    } 
    for (const i of verticalJoin) {
        if (i.includes(word)) {
            resultHolder = true;
            return resultHolder;
        }
    } 
    return resultHolder;
}
module.exports = wordSearch

// Pair programmed by Noah and Jacqueline! 