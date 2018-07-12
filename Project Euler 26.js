//algorithm: 1 / d => ( 10 ^ p - 1 ) / d. If d evenly divides 10^p-1 then p is the length of the repetend.
function findLength(d){
    var mod=1;
    for(var p=0;p<d;p++){
        mod*=10;
        mod%=d;
        if(mod===1){
            return p+1;
        }
    }
    return false;
};
var longest=[0,0];
for(var a=1;a<1000;a++){
    if(findLength(a)>longest[0]){
        longest[0]=findLength(a);
        longest[1]=a;
    }
}
console.log(longest[1]);