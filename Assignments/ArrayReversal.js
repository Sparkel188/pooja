// 9. Implement array reversal. dont use builtin function
// input = [1, 2, 3, 4, 5]
//output= [ 5, 4, 3, 2, 1 ]
let Array =[1, 2, 3, 4, 5];
let Arrayreversal = [];
for (let i=Array.length-1; i>=0 ; i--)
{
   Arrayreversal[Array.length - 1 - i]=Array[i];
}
console.log(Arrayreversal);
