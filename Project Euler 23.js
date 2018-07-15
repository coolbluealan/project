var sum=0;
var divisors=function(b){
    var divisor=[1];
    var j=2;
    while(j^2<=b){
        if(b%j===0){
            if(j*j===b){
                divisor.push(j);
            }else{
                divisor.push(j);
                divisor.push(b/j);
            }
        }
        j++
    } 
    return divisor;
};
var sumDivide=function(a){
    function getSum(total,sum){
        return total+sum;
    }
    var num=divisors(a);
    return num.reduce(getSum);
};
var abundant=[12];
for(var i=18;i<28124;i++){
    if(sumDivide(i)>i){
        abundant.push(i);
        if(i%2!=0){
            //console.log(i);
        }
    }
}
var ABflag=Array(28123)
ABflag.fill(0);
for(var a=0;a<abundant.length;a++){
    for(var b=a;b<abundant.length;b++){
        ABflag[abundant[a]+abundant[b]-1]=1;
    }
}
var sum2=0;
for(var c=0;c<28123;c++){
    if(ABflag[c]===0){
        if(c+1>46&&(c+1)%2===0){
            console.log(c+1);
        }
        sum2+=c+1;
        //console.log(c+" and sum: "+sum);
    }
}
var arr=divisors(256);
arr.sort(function(a, b){return a - b});
console.log(sum2);