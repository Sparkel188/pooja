// Special Index
// Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.

// Example Input
// Input 1:
// A=[2, 1, 6, 4]
// Input 2:
// A=[1, 1, 1]

// Example Output
// Output 1:
// 1
// Output 2:
// 3
function countSpecialIndices(A) {
    const n = A.length;
    let cumevenSum = [];
    let cumoddSum = [];
    let count = 0;
  
    // Calculate cumulative prefix sums for even and odd indices
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        evenSum += A[i];
      } else {
        oddSum += A[i];
      }
      cumevenSum[i] = evenSum;
      cumoddSum[i] = oddSum;
    }
  
    // Iterate through array and check for special indices
    for (let i = 0; i < n; i++) {
      let sumeven = 0;
      let sumodd = 0;
      
      if (i % 2 === 0) {
        sumeven = cumevenSum[i] - A[i] + cumoddSum[n - 1] - cumoddSum[i];
        sumodd = cumoddSum[i] + cumevenSum[n - 1] - cumevenSum[i];
      } else {
        sumeven = cumevenSum[i] + cumoddSum[n - 1] - cumoddSum[i];
        sumodd = cumoddSum[i] - A[i] + cumevenSum[n - 1] - cumevenSum[i];
      }
  
      if (sumeven === sumodd) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage:
  const arr1 = [2, 1, 6, 4];
  const arr2 = [1, 1, 1];
  
  console.log(countSpecialIndices(arr1)); // 1
  console.log(countSpecialIndices(arr2)); // 3