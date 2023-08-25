function addMatrices(A, B) {
  const rows = A.length;
  const columns = A[0].length;
  let result = [];

  // Perform addition and store the result in the 'result' matrix
  for (let i = 0; i < rows; i++) {
    result[i] = [];
    for (let j = 0; j < columns; j++) {
      result[i][j] = A[i][j] + B[i][j];
    }
  
  }

  return result;
}

// Input matrices
const A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const B = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
const A1 = [[1, 2, 3], [4, 1, 2], [7, 8, 9]];  
const B1 = [[9, 9, 7], [1, 2, 4], [4, 6, 3]]
 
// Compute the output matrix by adding matrices A and B
const outputMatrix = addMatrices(A, B);
const outputMatrix1 = addMatrices(A1, B1);

// Display the output
console.log(outputMatrix);
console.log(outputMatrix1);