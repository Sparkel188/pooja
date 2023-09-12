function rowSums(matrix) {
    const rowSumsArr = [];
  
    // Calculate row sums
    for (let i = 0; i < matrix.length; i++) {
      let sum = 0;
      for (let j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
      }
      rowSumsArr.push(sum);
    }
  
    return rowSumsArr;
  }
  
  // Example 2D integer matrix
  const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Compute row-wise sums
  const rowSumsArray = rowSums(A);
  
  // Display the output
  console.log(rowSumsArray);
  