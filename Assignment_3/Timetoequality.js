/*
Q3. Time to equality

Problem Description
Given an integer array A of size N. In one second, you can increase the value of one element by 1.

Find the minimum time in seconds to make all elements of the array equal.


Problem Constraints
1 <= N <= 1000000
1 <= A[i] <= 1000


Input Format
First argument is an integer array A.


Output Format
Return an integer denoting the minimum time to make all elements equal.


Example Input
A = [2, 4, 1, 3, 2]


Example Output
8
*/
function timeToEquality(A) {
    const n = A.length;
    let maxElement = Math.max(...A);
    let totalTime = 0;
  
    for (let i = 0; i < n; i++) {
      totalTime += A[i] - maxElement;
    }
  
    return totalTime;
  }
  
  // Test case
  const A = [2, 4, 1, 3, 2];
  console.log(timeToEquality(A)); 
  