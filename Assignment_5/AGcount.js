// Special Subsequences "AG"
// You have given a string A having Uppercase English letters.
// You have to find how many times subsequence "AG" is there in the given string.
// NOTE: Return the answer modulo 109 + 7 as the answer can be very large.

// Example Input
// Input 1:
//  A = "ABCGAG"
// Input 2:
//  A = "GAB"

// Example Output
// Output 1:
//  3
// Output 2:
//  0
function AGcount(A){
    let n = A.length;
    let countG = 0;
    let countA = 0;
    for(i=n; i>=0; i--){
        if(A[i] == 'G'){
            countG++;
        }
        if(A[i] == 'A'){
            countA += countG;
        }
    }
    return countA;
    }
    A = "ABCGAG";
    let result = AGcount(A);
    console.log(result);
        