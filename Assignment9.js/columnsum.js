function columnSums(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const columnSumsArr = [];
  
    for (let i = 0; i < columns; i++) {
    columnSumsArr.push(0);
  }
    // Calculate column sums
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        columnSumsArr[j] += matrix[i][j];
      }
    }
  
    return columnSumsArr;
  }
  
  // Example 2D integer matrix
  const A = [
    [1,2,3,4],
    [5,6,7,8],
    [9,2,3,4]
  ];
  
  // Compute column-wise sums
  const columnSumsArray = columnSums(A);
  
  // Display the output
  console.log(columnSumsArray);
  