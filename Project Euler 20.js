//steps: 1.
//fact is the arrray of digits in 100!.it starts at 1=1!
var fact=[1];
//i is the number that multiplies every element in fact to get the next factorial
for(var i=2;i<=100;i++){
    var counter=0;
    //j loop loops through every element in fact to get multiplied by i
    for(var j=0;j<fact.length;j++){
        fact[j]*=i;
    }
    for(var k=fact.length-1;k>=0;k--){
        if(fact[k]>=10){
            if(k===0){
                if(fact[k]>=10&&fact[k]<100){
                    fact.unshift(0);
                    counter++;
                }else{
                    fact.unshift(0);
                    fact.unshift(0);
                    counter+=2;
                }
            }
            //regrouping the digits
            fact[k-1+counter]+=Math.floor(fact[k+counter]/10);
            fact[k+counter]-=Math.floor(fact[k+counter]/10)*10;
        }
    }
    var test=i*2;
}
var sum=0;
for(var a=0;a<fact.length;a++){
    sum+=fact[a];
}
console.log(sum);