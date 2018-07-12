var powSum=function(pow){
    var pow2=[1]
    for(var j=0;j<pow;j++){
        for(var k=0;k<pow2.length;k++){
            pow2[k]*=2;
        }
        for(var i=pow2.length-1;i>=0;i--){
            if(pow2[i]>=10){
                if(i===0){
                    pow2.unshift(0);
                    pow2[i]+=1;
                    pow2[i+1]-=10;
                }else{
                    pow2[i-1]+=1;
                    pow2[i]-=10;
                }
            }
        }
    }
    function getSum(total,num){
        return total + num;
    }
    return pow2.reduce(getSum);
}
console.log(powSum(1000));