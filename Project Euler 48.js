var find10=function(a){
    var digits=[1];
    var counter=0;
    for(var i=0;i<a;i++){
        for(var j=0;j<digits.length;j++){
            digits[j]*=a;
        }
        for(var k=digits.length-1;k>=0;k--){
            if(digits[k]>=10){
                if(k===0){
                    digits.unshift(0);
                    counter++;
                }
                digits[k-1+counter]+=Math.floor(digits[k+counter]/10);
                digits[k+counter]-=Math.floor(digits[k+counter]/10)*10;
            }
        }
    }
    var last10=[];
    for(var a=digits.length-1;a>=digits.length-11;a--){
        if(digits[a]!=undefined){
            last10.unshift(digits[a]);
        }
    }
    return last10.join();
}
var sum=[];
for(var b=1;b<=1000;b++){
    sum.push(find10(b));
}
function getSum(total,sum){
    return total+sum;
}
console.log(sum.reduce(getSum));