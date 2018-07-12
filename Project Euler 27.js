var Primes =[];
Primes[0]=2;
for(var y = 3;y <= 10000;y+=2){
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
var binarySearch=function(target,low,high,arr){
    while(low<=high){
        var mid=low+high;
        if(arr[mid]===target){
            return mid;
        }else if(arr[mid]<target){
            low=mid+1;
        }else{
            high=mid-1;
        }
    };
    return false;  
};
var check=function(a,b){
    var flag=true;
    var n=1;
    while(flag){
        var expression=n*n+a*n+b;
        if(binarySearch(expression,0,Primes.length-1,Primes)){
            n+=1;
        }else{
            flag=false;
        }
    }
    return n;
};
var long=[0,0];
for(var a=-1000;a<=1000;a++){
    for(var b=0;b<binarySearch(997,0,500,Primes);b++){
        if(check(a,Primes[b])>long[0]){
            long[0]=check(a,Primes[b]);
            long[1]=a*Primes[b];
        }
    }
}
console.log(long[1]);