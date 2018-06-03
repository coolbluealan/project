var fibonacci =[1,2];
for(var i=2;i<33;i++){
    fibonacci.push(fibonacci[i-1]+fibonacci[i-2]);
    println(fibonacci[i]);
}
var even=[];
for(var j=0;j<fibonacci.length;j++){
    if(fibonacci[j]%2===0&&fibonacci[j]<4000000){
        even.push(fibonacci[j]);    
    }
}
var sum=0;
for(var k=0;k<even.length;k++){
    sum+=even[k];   
}
println('sum of even: '+sum);