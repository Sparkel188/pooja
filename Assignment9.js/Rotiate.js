function rotateMatrix(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
  
    // Transpose the matrix
    for (let i = 0; i < rows; i++) {
      for (let j = i; j < columns; j++) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  
    // Reverse each row to get the final result
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < Math.floor(columns / 2); j++) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[i][columns - 1 - j];
        matrix[i][columns - 1 - j] = temp;
      }
    }
  
    return matrix;
  }
  
  const matrix = [
    [1, 2],
    [3, 4]
  ];
  
  const rotatedMatrix = rotateMatrix(matrix);
  
  console.log(rotatedMatrix);
  