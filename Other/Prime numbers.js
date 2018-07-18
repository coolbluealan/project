//use sieve algorithm
var flag=Array(11);
flag.fill(1);
flag[0]=0;
flag[1]=0;
var primes=[]
for(var i=2;i<flag.length;i++){
    if(flag[i]===1){
        primes.push(i);
        counter=i;
        while(counter<=flag.length){
            counter+=i;
            flag[counter]=0;
        }
    }
}
console.log(primes.join());