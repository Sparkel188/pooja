// Declare an array and sum of all values in an array using loops - for, while  — Use functions
// using for loop
// input Arr = [10, 20, 45, 3, 4]
// output 82
let sumArray = 0;
let Arr = [10, 20, 45, 3, 4];
for(let i=0; i<Arr.length; i++)
{
   sumArray += Arr[i];  
}
console.log(sumArray);

// using while loop
let sumArray_1 = 0;
let Array = [10, 20, 45, 3, 4];
let i=0; 
while(i<Array.length)
{
   sumArray_1 += Array[i]; 
   i++; 
}
console.log(sumArray_1);