 //8. Implement string reversal. dont use builtin function
 // input = "JavaScript"
 // output = tpircSavaJ

 let string ="JavaScript";
 let reversal = "";
 for (let i=string.length-1; i>=0 ; i--)
 {
    reversal+=string[i];
 }
 console.log(reversal);
