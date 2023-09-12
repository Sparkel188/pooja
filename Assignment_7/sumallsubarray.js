function sumallsubarray(A) {
    let result = 0; // Initialize result to 0
    for (let i = 0; i < A.length; i++) {
        let sum = 0;
        for (let j = i; j < A.length; j++) {
            sum += A[j];
            result += sum; 
        }
       // Accumulate sum in the result
    }
    return result; // Return the final sum
}

const A = [1, 2, 3];
const result = sumallsubarray(A);
console.log(result); // Output: 16

const A1 = [2, 1, 3];
const result1 = sumallsubarray(A1);
console.log(result1); // Output: 20
