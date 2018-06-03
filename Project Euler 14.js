
var collatz= function(num){
    var terms=[num];
    var counter=1;
    while(num!=1){
        if(num%2===0){
            counter++;
            num/=2;
        }else{
            counter++;
            num=num*3+1;
        }
    }
    return counter;
};
var sequences=Array(999999);
for(var i=0;i<999999;i++){
    sequences[i]=collatz(i+1);
    if(i%100000===0){
        console.log("finished processing "+i +" loops")
    }
}
//for storing the greatest value that a number produces in a collatz sequence
var longSequence=0;
var index=0;
for(var j=0;j<sequences.length;j++){
    if(sequences[j]>longSequence){
        longSequence=sequences[j];
        index=j;
    }
}
console.log(index+1);