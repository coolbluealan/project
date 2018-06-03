var triNum=[];
var limit=13000;
for(var i=limit-2000;i<=limit;i++){
    triNum.push((i*(i+1))/2);   
}
var divisors=function(num){
    var factors =[];
    for(var i=1;i<sqrt(num);i++){
        if(num%i===0){
            factors.push(i);   
        }
    }
    return factors.length;
};
            
for(var k=0;k<triNum.length;k++){
    if(divisors(triNum[k])>500){
        println(triNum[k]);    
    }
}
