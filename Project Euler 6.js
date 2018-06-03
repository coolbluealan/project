var squares=[];
for(var i=1;i<=100;i++){
    squares.push(i*i);
}
var sum=0;
for(var j=0;j<squares.length;j++){
    sum=sum+squares[j];   
}
println(sum);
var sum2=0;
for(var k=1;k<=100;k++){
    sum2+=k;   
}
var sum3 = sum2*sum2;
println(sum3);
println(sum3-sum);