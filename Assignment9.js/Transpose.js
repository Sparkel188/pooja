function transposeMatrix(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const transposedMatrix = [];
  
    // Initialize the transposed matrix with empty rows
    for (let i = 0; i < columns; i++) {
      transposedMatrix.push([]);
    }
  
    // Populate the transposed matrix by swapping rows and columns
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        transposedMatrix[j][i] = matrix[i][j];
      }
    }
  
    return transposedMatrix;
  }
  
  // Example 2D integer matrix
  const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Transpose the matrix
  const transposedMatrix = transposeMatrix(A);
  
  // Display the output
  console.log(transposedMatrix);
  