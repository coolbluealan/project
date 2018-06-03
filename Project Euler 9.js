var limit = 1000;
for(var c=1;c<limit;c++){
    for(var b=1;b<c;b++){
        var a=1000-b-c;
        if(a*a+b*b===c*c&&a>0&&a<b){
            println('a: '+a+',b: '+b+',c: '+c+',abc: '+a*b*c);   
        }
    }
}
