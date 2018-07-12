var sumDivide=function(a){
    var sum=0;
    for(var j=2;j<Math.sqrt(a);j++){
        if(a%j===0){
            sum+=j+a/j
        }
    }
    return sum+1;
}
var sumAmicable=0;
for(var i=2;i<10000;i++){
    if(sumDivide(sumDivide(i))===i&&sumDivide(i)!=i){
        sumAmicable+=i;
    }
}
console.log(sumAmicable);