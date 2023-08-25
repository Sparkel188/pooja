function subMatrices(A, B) {
    const rows = A.length;
    const columns = A[0].length;
    let result = [];
  
    // Perform addition and store the result in the 'result' matrix
    for (let i = 0; i < rows; i++) {
      result[i] = [];
      for (let j = 0; j < columns; j++) {
        result[i][j] = A[i][j] - B[i][j];
      }
    
    }
  
    return result;
  }
  
  // Input matrices
 const A = [[1, 1]];
 const B = [[2, 3]];
   
  // Compute the output matrix by adding matrices A and B
  const outputMatrix = subMatrices(A, B);
  
  // Display the output
  console.log(outputMatrix);