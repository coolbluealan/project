var sum=1;
var add=3;
var ad2=2;
var counter=0;
while(add<1001*1001+1){
    sum+=add;
    counter++;
    if(counter%4===0){
        ad2+=2;
        counter=0;
    }
    add+=ad2;
}
console.log(sum);