var limit =1000;
var sum = 0;
var numbers = [];
for(var i=1;i<limit;i++){
	if(i%3===0){
        numbers.push(i);
	}
}
var sum2 = 0;
for(var a=0;a<numbers.length;a++){
    sum2+=numbers[a];   
}
//println(sum2);
for(var j=1;j<limit;j++){
	if(j%5===0){
		if(j%3===1||j%3===2){
		    numbers.push(j);    
		}
	}
}
var sum3 = 0;
for(var b=0;b<numbers.length;b++){
    sum3+=numbers[b];   
}
//println(sum3-sum2);
for(var k=0;k<numbers.length;k++){
	sum+=numbers[k];
}
println(sum);
