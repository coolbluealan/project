var letters=[];
for(var i=0;i<999;i++){
    var n=i+1;
    var num=Array.from(n.toString());
    function number(input){
        return Number(input);
    }
    num=num.map(number);
    if(num[num.length-1]===1&&num[num.length-2]!=1){
        letters[i]=3;
    }else if(num[num.length-1]===2&&num[num.length-2]!=1){
        letters[i]=3;
    }else if(num[num.length-1]===3&&num[num.length-2]!=1){
        letters[i]=5;
    }else if(num[num.length-1]===4&&num[num.length-2]!=1){
        letters[i]=4;
    }else if(num[num.length-1]===5&&num[num.length-2]!=1){
        letters[i]=4;
    }else if(num[num.length-1]===6&&num[num.length-2]!=1){
        letters[i]=3;
    }else if(num[num.length-1]===7&&num[num.length-2]!=1){
        letters[i]=5;
    }else if(num[num.length-1]===8&&num[num.length-2]!=1){
        letters[i]=5;
    }else if(num[num.length-1]===9&&num[num.length-2]!=1){
        letters[i]=4;
    }else if(num[num.length-1]===0&&num[num.length-2]===1){
        letters[i]=3;
    }else if(num[num.length-1]===1&&num[num.length-2]===1){
        letters[i]=5;
    }else if(num[num.length-1]===2&&num[num.length-2]===1){
        letters[i]=6;
    }else if(num[num.length-1]===3&&num[num.length-2]===1){
        letters[i]=8;
    }else if(num[num.length-1]===4&&num[num.length-2]===1){
        letters[i]=8;
    }else if(num[num.length-1]===5&&num[num.length-2]===1){
        letters[i]=7;
    }else if(num[num.length-1]===6&&num[num.length-2]===1){
        letters[i]=7;
    }else if(num[num.length-1]===7&&num[num.length-2]===1){
        letters[i]=9;
    }else if(num[num.length-1]===8&&num[num.length-2]===1){
        letters[i]=9;
    }else if(num[num.length-1]===9&&num[num.length-2]===1){
        letters[i]=8;
    }
    if(num[num.length-2]!=undefined){
        if(num[num.length-2]===2||num[num.length-2]===3||num[num.length-2]===9||num[num.length-2]===8){
            if(letters[i]===undefined){
                letters[i]=6;
            }else{
                letters[i]+=6;
            }
        }else if(num[num.length-2]===5||num[num.length-2]===6||num[num.length-2]===4){
            if(letters[i]===undefined){
                letters[i]=5;
            }else{
                letters[i]+=5;
            }
        }else if(num[num.length-2]===7){
            if(letters[i]===undefined){
                letters[i]=7;
            }else{
                letters[i]+=7;
            } 
        }
    }
    if(num[num.length-3]!=undefined){
        if(num[num.length-3]===1||num[num.length-3]===2||num[num.length-3]===6){
            if(letters[i]===undefined){
                letters[i]=10;
            }else{
                letters[i]+=10;
            } 
            if(i+1%100!=0){
                letters[i]+=3;
            }
        }else if(num[num.length-3]===3||num[num.length-3]===7||num[num.length-3]===8){
            if(letters[i]===undefined){
                letters[i]=12;
            }else{
                letters[i]+=12;
            } 
            if(i+1%100!=0){
                letters[i]+=3;
            }
        }else if(num[num.length-3]===4||num[num.length-3]===5||num[num.length-3]===9){
            if(letters[i]===undefined){
                letters[i]=11;
            }else{
                letters[i]+=11;
            } 
            if(i+1%100!=0){
                letters[i]+=3;
            }
        }
    }
    letters[999]=11;
}
function getSum(total,sum){
    return total+sum;
}
var p=letters.reduce(getSum)-27;
console.log("There are "+p+" letters.");