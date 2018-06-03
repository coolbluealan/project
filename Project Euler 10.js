var AllPrimes =[];
AllPrimes[0]=2;
var counter = 1;
/*change the number below to change the range of the primes.*/ 
//              =>    <= 
for(var y = 3;y <= 2E6;y+=2){
    var isYPrime = 1;
    
    if(y%2 === 0){
       isYPrime = 10;
    }  else{
    
    for(var i = 3;i <= sqrt(y);i+=2){
        if(y%i === 0){
            isYPrime=11;  
            break;
         }
}
    }
    if(isYPrime === 1){
        AllPrimes[counter]=y;    
        counter++;
    }
}
var sum=0;
for(var i=0;i<AllPrimes.length;i++){
    sum+=AllPrimes[i];    
}
println(sum);