function maxsumsubarray(A){
    let max = Number.MIN_VALUE;
    for (i=0;i<A.length;i++){
	 let sum = 0;
         for(j=i;j<A.length;j++){
            sum +=A[j];
            if (sum>max){
                max = sum;
             }
        }
    }
    console.log(max);
}
const A=[1,2,3,4,-10];
const result = maxsumsubarray(A);

const A1=[-2,1,-3,4,-1,2,1,-5,4];
const result1 = maxsumsubarray(A1);