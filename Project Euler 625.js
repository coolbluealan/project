//Euclideans algorithm
var findGCD=function(num,num2){
    var GCF = 0;
    //makes num bigger than num2
    if (num < num2){
        var temp = num2;
        num2 = num;  
        num = temp;
    }
    //find out if num2 is a factor of num 
    if (num % num2 === 0){
        GCF = num2;
    } else {
        var dividend = num;
        var divisor = num2;
        var remainder = 1;
        while (remainder > 0){
            remainder = dividend % divisor;
            dividend = divisor;
            divisor = remainder;   
        }
        GCF = dividend;
    }
    return GCF;
}
var sum=0;
for(var j=1;j<=Math.pow(10,11);j++){
    for(var i=1;i<=j;i++){
        sum+=findGCD(i,j);
    }
}
console.log(sum);