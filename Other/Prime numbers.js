//use sieve algorithm
var sieve=function(n){
    var flag=Array(n);
    flag.fill(1);
    flag[0]=0;
    flag[1]=0;
    var primes=[];
    for(var i=2;i<n;i++){
        if(flag[i]===1){
            primes.push(i);
            counter=i;
            while(counter<n){
                counter+=i;
                flag[counter]=0;
            }
        }
    }
    return primes;
}
