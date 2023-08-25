function matrixMultiplication(A, B) {
    const M = A.length;
    const N = A[0].length;
    const P = B[0].length;
  
    // Check if the matrices can be multiplied
    if (N !== B.length) {
      console.log("Cannot multiply matrices. Number of columns in A must be equal to the number of rows in B.");
      return null;
    }
  
    // Initialize the resultant matrix with zeros
    const result = [];
    for (let i = 0; i < M; i++) {
      result.push(0);
    }
  
    // Perform matrix multiplication
    for (let i = 0; i < M; i++) {
      for (let j = 0; j < P; j++) {
        for (let k = 0; k < N; k++) {
          result[i][j] += A[i][k] * B[k][j];
        }
      }
    }
  
    return result;
  }
  
  // Example matrices
  const A = [
    [1, 2],
    [3, 4]
  ];
  
  const B = [
    [5, 6],
    [7, 8]
  ];
  
  // Multiply the matrices A and B
  const resultMatrix = matrixMultiplication(A, B);
  
  // Display the output
  console.log(resultMatrix);
  