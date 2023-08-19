/*
Q1:  equilibrium
Problem Description
You are given an array A of integers of size N.

Your task is to find the equilibrium index of the given array

The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.

Note:

Array indexing starts from 0.
If there is no equilibrium index then return -1.
If there are more than one equilibrium indexes then return the minimum index.

constraints:

1 <= N <= 10^5
-10^5 <= A[i] <= 10^5
--------------------------------------------------------------------------------------------------------

eg:

Example Input
Input 1:
A = [-7, 1, 5, 2, -4, 3, 0]
Input 2:

A = [1, 2, 3]


Example Output
Output 1:
3
Output 2:

-1

*/
function equilibriumIndex(A) {
    const n = A.length;
    let leftSum = 0;
    let rightSum = A.reduce((sum, num) => sum + num, 0);
  
    for (let i = 0; i < n; i++) {
      rightSum -= A[i];
  
      if (leftSum === rightSum) {
        return i;
      }
  
      leftSum += A[i]; 
    }
  
    return -1; 
  }
  
  // Test case 1
  const A1 = [-7, 1, 5, 2, -4, 3, 0];
  console.log(equilibriumIndex(A1)); 
  
  // Test case 2
  const A2 = [1, 2, 3];
  console.log(equilibriumIndex(A2)); 
  