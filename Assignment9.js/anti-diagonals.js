function getAntiDiagonals(matrix) {
    const N = matrix.length;
    const result = [];
  
    // Initialize the result matrix with zeros
    for (let i = 0; i < 2 * N - 1; i++) {
      result[i] = Array(N).fill(0);
    }
  
    // Populate the result matrix with the anti-diagonal elements
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        result[i + j][j] = matrix[i][j];
      }
    }
  
    return result;
  }
  
  // Example Input matrix
  const matrix = [[1, 2], [3, 4]];
  
  // Compute the anti-diagonals
  const output = getAntiDiagonals(matrix);
  
  // Display the output
  console.log(output);
  