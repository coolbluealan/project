var isDebug =false;

var isPalindrome=function(a){
    if(a<10000||a>998001){
        return false;    
    }else{
        var digits=[];
        for(var i=0;i<6;i++){
            digits[i]=floor(a/pow(10,5-i));
            a-=pow(10,5-i)*digits[i];
            if(isDebug){
                println((i+1)+"th digit:"+digits[i]); 
            }
        }
        //that means this number has 6 digits
        if(digits[0]>0){
            if(digits[0]===digits[5]&&digits[1]===digits[4]&&digits[2]===digits[3]){
                return true;    
            }
            else{
                return false;   
            }
        }else{
            if(digits[1]===digits[5]&&digits[2]===digits[4]){
                return true;    
            }else{
                return false;   
            }
        }
    }
};
var biggest=0;
for(var j=100;j<1000;j++){
    for(var k=100;k<1000;k++){
        if(isPalindrome(j*k)){
            if(j*k>biggest){
                biggest=j*k;    
            }
        }
    }
}
println(biggest);
if(isPalindrome(202202)){
    println('yes');    
}else{
println('no');    
}