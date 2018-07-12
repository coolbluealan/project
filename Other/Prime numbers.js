var Primes =[];
Primes[0]=2;
for(var y = 3;y <= 2000000;y+=2){
    var isYPrime = 1;   
    for(var i = 3;i <= Math.sqrt(y);i+=2){
        if(y%i === 0){
            isYPrime=11;  
            break;
        }

    }
    if(isYPrime === 1){
        Primes.push(y);    
    }
}